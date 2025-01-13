import React, { useState, useEffect, memo } from 'react';

import { Container, Tabs, Tab, Modal, Button, Form, Spinner } from 'react-bootstrap';
import HouseQuestionnaire from './HouseQuestionnaire';
import DailyChoreQuestionnaire from './DailyChoreQuestionnaire';
import useOllamaClient from './OllamaClient';
import generatePropertyPrompt from './PromptGenerator' 
import { useTheme } from '../components/ThemeContext';
import '../styles/NewAssessment.css';

const emptyFormData = {
  house: {
    values: null,
    complete: false
  },
  dailyChore: {
    values: null,
    complete: false
  },
  result: ''
};

const NewAssessment = ({ onAddAssessment, editAssessment, onExitAssessment, assessments, showResultModal, updateTitle }) => {
  const { darkMode, mode, toggleDarkMode } = useTheme();
  const [assessmentName, setAssessmentName] = useState(editAssessment?.name || '');
  const [activeTab, setActiveTab] = useState('house');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [formData, setFormData] = useState(editAssessment?.formData || emptyFormData);
  const [loading, setLoading] = useState(false);
  const { sendPrompt } = useOllamaClient();

  useEffect(() => {
    if (editAssessment) {
      setAssessmentName(editAssessment.name || '');
      setFormData(editAssessment.formData || emptyFormData);
    } else {
      setAssessmentName('');
      setFormData(emptyFormData);
    }
  }, [editAssessment]);

  const handleAdd = () => {
    if (assessmentName.trim()) {
      onAddAssessment({ id: editAssessment?.id || Date.now(), name: assessmentName, formData });
      setAssessmentName('');
      setFormData(emptyFormData);
    }
  };

  const handleShowResultModal = () => {
    showResultModal(formData.result, true)
  }

  const handleExit = () => {
    setAssessmentName('');
    setFormData(emptyFormData);
    if (onExitAssessment) {
      onExitAssessment();
    }
  };
  
  const isQuestionnaireComplete = (type) => {
    return formData[type].complete === true;
  };

  const handleQuestionnaireSubmit = (type, complete, values) => {
    setFormData(prev => {
      if (prev[type].complete === complete && prev[type].values === values) {
        return prev;
      }
      return {
        ...prev,
        [type]: { values, complete },
      };
    });
  };
  

  const enableAddAssessment = () => {
    return editAssessment != null ? true : (assessmentName.length > 3 && !assessments.some(assessment => assessment.name.toLowerCase() === assessmentName.toLowerCase()));
  };

  const ReviewModal = memo(({ show, onHide, data, onSubmit }) => {
    return (
      <Modal show={show} onHide={onHide} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Review Assessment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="review-content">
            {data?.house?.values && (
              <div className="review-section">
                <h3>House Assessment</h3>
                <pre>{JSON.stringify(data.house.values, null, 2)}</pre>
              </div>
            )}
            {data?.dailyChore?.values && (
              <div className="review-section">
                <h3>Daily Chore Assessment</h3>
                <pre>{JSON.stringify(data.dailyChore.values, null, 2)}</pre>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide} disabled={loading}>
            Back to Edit
          </Button>
          <Button
            variant="primary"
            onClick={onSubmit}
            disabled={!data?.house?.values || !data?.dailyChore?.values || loading}
          >
            Submit Assessment
          </Button>
        </Modal.Footer>
      </Modal>
    );
  });

  const handleFinalSubmit = async () => {
    setLoading(true);
    try {
      console.log('Submitting assessment:', formData);
      setShowReviewModal(false);
      try {
        console.log('Sending data to Ollama...');
        const prompt = generatePropertyPrompt(formData);
        const resp = await sendPrompt({ prompt });
        setFormData(prev => ({ ...prev, result: resp }));
        console.log('Complete Analysis:\n', resp);
      } catch (error) {
        console.error('Failed to process property data:', error.message);
      }
    } catch (error) {
      console.error('Error submitting assessment:', error);
    } finally {
      setLoading(false);
    }
  };

  const isAssessmentNameValid = () => {
    return assessmentName.length == 0 || (assessmentName.length >= 4 && !assessments.some(assessment => assessment.name.toLowerCase() === assessmentName.toLowerCase()));
  };

  const handleAssessmentName = (name) => {
    setAssessmentName(name);
    updateTitle(name);
  }

  return (
    <Container fluid className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-4" data-bs-theme={mode}>
      <Form.Group className="mb-3" controlId="assessmentName">
        <Form.Control
          type="text"
          value={assessmentName}
          onChange={(e) => handleAssessmentName(e.target.value)}
          placeholder="Start new assessment name"
          style={{ borderColor: isAssessmentNameValid() ? '' : 'red' }}
          disabled={loading}
        />
      </Form.Group>
      <Button onClick={handleAdd} variant="primary" class="me-2" disabled={!enableAddAssessment() || loading}>
        {editAssessment ? 'Update Assessment' : 'Add Assessment'}
      </Button>
      {assessmentName.trim().length > 3 && (
            <Button
              variant="secondary"
              onClick={handleExit}
              className="me-2"
              disabled={loading}
            >
              Close Assessment
            </Button>
          )}
       {assessmentName.trim().length > 3  && ( <Button 
          variant="primary"
          onClick={() => setShowReviewModal(true)}
          disabled={!(formData?.house?.complete && formData?.dailyChore?.complete === true) || loading}
        >
          {loading ? (
            <span>Assessing...<Spinner animation="border" size="sm" /></span>
          ) : (
            'Review & Submit'
          )}
        </Button>)}
        {formData?.result.trim().length > 0 && (
          <Button 
            variant="success"
            onClick={() => handleShowResultModal()}
            className="ms-2"
          >
            View Result
          </Button>
        )}
      </div>
      {assessmentName.trim().length > 3 && ( <div>
        <Tabs
        id="assessment-tabs"
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        data-bs-theme={mode}
        className="mb-3"
        defaultActiveKey="profile"
      >
        <Tab class="tab" eventKey="house" title="House Questionnaire">
          <div className="questionnaire-status mb-3">
            {isQuestionnaireComplete('house') ? (
              <span className="text-success">✓ Questionnaire Complete</span>
            ) : (
              <span className="text-warning">⚠ Questionnaire Incomplete</span>
            )}
          </div>
          <HouseQuestionnaire 
            onSectionSave={(isTabComplete, values) => handleQuestionnaireSubmit('house', isTabComplete, values)}
            state={editAssessment ? editAssessment.formData.house : formData.house}
            disabled={loading}
          />
        </Tab>
        <Tab class="tab" eventKey="chore" title="Daily Chore Questionnaire">
          <div className="questionnaire-status mb-3">
            {isQuestionnaireComplete('dailyChore') ? (
              <span className="text-success">✓ Questionnaire Complete</span>
            ) : (
              <span className="text-warning">⚠ Questionnaire Incomplete</span>
            )}
          </div>
          <DailyChoreQuestionnaire 
            onSectionSave={(isTabComplete, values) => handleQuestionnaireSubmit('dailyChore', isTabComplete, values)}
            state={formData.dailyChore}
            disabled={loading}
          />
        </Tab>
      </Tabs>

      {showReviewModal && (
        <ReviewModal
          show={showReviewModal}
          onHide={() => setShowReviewModal(false)}
          data={formData}
          onSubmit={handleFinalSubmit}
        />
      )}
      </div>)}
    </Container>
  );
};

export default NewAssessment;