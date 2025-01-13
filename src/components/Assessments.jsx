// components/Assessment.jsx
import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';  // Import dompurify

import { Container, Button, Table, Row, Col, Accordion, Modal } from 'react-bootstrap';
import NewAssessment from './NewAssessment'
import { useTheme } from '../components/ThemeContext';

const Assessments = () => {
  const { darkMode, mode, toggleDarkMode } = useTheme();
  const [assessments, setAssessments] = useState([]);
  const [title, setTitle] = useState('Assessments');
  const [editAssessment, setEditAssessment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);

  const handleAddAssessment = (newAssessment) => {
    setAssessments((prevAssessments) => {
      const existingIndex = prevAssessments.findIndex(a => a.id === newAssessment.id);
      if (existingIndex !== -1) {
        const updated = [...prevAssessments];
        updated[existingIndex] = newAssessment;
        return updated;
      }
      return [...prevAssessments, newAssessment];
    });
    setEditAssessment(null);
    setTitle('Assessments');
  };

  useEffect(() => {
    console.log(assessments);
  },[assessments]);

  const handleEdit = (assessment) => {
    setEditAssessment(assessment);
  };

  const handleDelete = (id) => {
    setAssessments((prevAssessments) => prevAssessments.filter(assessment => assessment.id !== id));
  };

  const handleViewResult = (result) => {
    setSelectedResult(result);
    setShowModal(true);
  };

  const handleExitAssessment = () => {
    setEditAssessment(null);
    setTitle('Assessments');
  };

  const handleShowResultModal = (result, show) => {
    setSelectedResult(result);
    setShowModal(show)
  }

  const handleTitleUpdate = (title) => {
    setTitle(title.length<=3 ? 'Assessments' : title);
  }

  return (
    <Container className={darkMode ? 'py-4 bg-dark text-white' : 'py-4 bg-light text-dark'}>
      <h1>{editAssessment && title.length <= 3 === 'Assessments' ? editAssessment.name : title}</h1>
      <NewAssessment onAddAssessment={handleAddAssessment} editAssessment={editAssessment} onExitAssessment={handleExitAssessment} assessments={assessments} showResultModal = {handleShowResultModal} updateTitle = {handleTitleUpdate}/>
      <Accordion defaultActiveKey="0" className="mt-4" data-bs-theme={mode}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Previous Assessments</Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Actions</th>
                  <th>Assessment Name</th>
                  <th>Form Data (Gist)</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {assessments.map((assessment) => (
                  <tr key={assessment.id}>
                    <td>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(assessment)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(assessment.id)}
                      >
                        Delete
                      </Button>
                    </td>
                    <td>{assessment.name}</td>
                    <td>{assessment.formData ? JSON.stringify(assessment.formData).slice(0, 50) + '...' : 'No Data'}</td>
                    <td>
                      {assessment.formData.result ? (
                        <Button
                          variant="info"
                          size="sm"
                          onClick={() => handleViewResult(assessment.formData.result)}
                        >
                          View Result
                        </Button>
                      ) : (
                        'No Result'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Assessment Result</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {selectedResult ? (
          <div dangerouslySetInnerHTML={{ 
            __html: DOMPurify.sanitize(selectedResult),  // Sanitize the HTML
          }} />
            ) : (
            'No Result Available'
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Assessments;