import React, { useState, useEffect } from 'react';
import { useFormikContext, Field, ErrorMessage } from 'formik';
import { Navbar, Nav, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { ChevronLeft, ChevronRight, CheckCircle, Clock, ExclamationCircle } from 'react-bootstrap-icons';
import { useTheme } from '../components/ThemeContext';
import 'react-tooltip/dist/react-tooltip.css';
import '../styles/FormTab.css';

const FormTab = ({
  tabId,
  title,
  sections,
  state,
  initialValues,
  isActive = true,
  values,
  setValues,
  onSectionSave,
  disabled
}) => {
  const { darkMode, mode, toggleDarkMode } = useTheme();
  const formik = useFormikContext();
  const [currentSection, setCurrentSection] = useState(sections[0]?.id);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [tabComplete, setTabComplete] = useState(() =>
    state != null ? state.complete : false
  );

  const [sectionStates, setSectionStates] = useState(() => {
    return state != null && state.values != null
      ? state.values
      : sections.reduce((acc, section) => {
          acc[section.id] = {
            isComplete: false,
            isPending: true,
            lastSaved: null,
            data: null,
          };
          return acc;
        }, {});
  });

  useEffect(() => {
    onSectionSave(tabComplete, sectionStates);
  }, [sectionStates, onSectionSave]);

  const updateSectionState = (sectionId, updates) => {
    setSectionStates((prevStates) => ({
      ...prevStates,
      [sectionId]: {
        ...prevStates[sectionId],
        ...updates,
      },
    }));
  };

  const handleSectionSave = (sectionId) => {
    const section = sections.find((s) => s.id === sectionId);
    if (!section) return;
    const sectionData = section.fields.reduce((acc, field) => {
      acc[field.name] = values[field.name];
      return acc;
    }, {});
    updateSectionState(sectionId, {
      isComplete: true,
      isPending: false,
      lastSaved: new Date(),
      data: sectionData,
    });
    checkTabCompletion();
  };

  const checkTabCompletion = () => {
    const allSectionsCompleted = sections.every((section) =>
      sectionStates[section.id]?.isComplete
    );
    setTabComplete(allSectionsCompleted);
  };

  const handleNavigateSection = (direction) => {
    const currentIndex = sections.findIndex((s) => s.id === currentSection);
    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < sections.length) {
      setCurrentSection(sections[newIndex].id);
    }
  };

  const getIcon = (sectionId) => {
    const { isComplete, isPending } = sectionStates[sectionId] || {};
    if (isComplete) return <CheckCircle color="green" className="me-2" />;
    if (isPending && sectionId === currentSection)
      return <ExclamationCircle color="orange" className="me-2" />;
    return <Clock color="gray" className="me-2" />;
  };

  const renderField = (field) => {
    const fieldName = field.name;
    const fieldOptions = field.options || [];
    const label = field.label;
    const isNumeric = field.type === 'number';
    const isDate = field.type === 'date';
    const otherSelected =
      fieldOptions.length > 0 && formik.values[fieldName] === 'other';
    const tooltip = field.tooltip;

    return (
      <div key={fieldName} className="form-group">
        <label
          htmlFor={fieldName}
          data-tooltip-id={`tooltip-${fieldName}`}
          data-tooltip-content={tooltip}
        >
          {label}
        </label>
        <Tooltip id={`tooltip-${fieldName}`} />
        {isDate ? (
          <Field
            type="date"
            id={fieldName}
            name={fieldName}
            className="form-control"
            disabled={disabled}
          />
        ) : isNumeric ? (
          <Field
            type="number"
            id={fieldName}
            name={fieldName}
            className="form-control"
            placeholder={`Enter ${label.toLowerCase()}`}
            min="0"
            step={fieldName.includes('area') ? '0.01' : '1'}
            disabled={disabled}
          />
        ) : fieldOptions.length > 0 ? (
          <Field as="select" id={fieldName} name={fieldName} className="form-control" disabled={disabled}> 
            <option value="">Select {label.toLowerCase()}</option>
            {fieldOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Field>
        ) : (
          <Field
            type="text"
            id={fieldName}
            name={fieldName}
            className="form-control"
            disabled={disabled}
            placeholder={`Enter ${label.toLowerCase()}`}
          />
        )}
        <ErrorMessage name={fieldName} component="div" className="error" />
        {otherSelected && (
          <div className="form-group nested-field">
            <Field
              type="text"
              id={`${fieldName}Other`}
              name={`${fieldName}Other`}
              className="form-control"
              disabled={disabled}
              placeholder={`Enter Other ${label.toLowerCase()}`}
            />
            <ErrorMessage
              name={`${fieldName}Other`}
              component="div"
              className="error"
            />
          </div>
        )}
      </div>
    );
  };

  const renderSection = (section) => (
    <div className="form-section active" key={section.id}>
      <h2>{section.title}</h2>
      {section.fields && section.fields.map((field) => renderField(field))}
    </div>
  );

  if (!isActive) return null;

  const activeSection = sections.find((s) => s.id === currentSection);

  return (
    <div className="form-tab d-flex" data-bs-theme={mode}>
      {/* Sidebar NavBar */}
      <div
        className={`navbar-wrapper ${isCollapsed ? 'collapsed' : ''}`}
        style={{ width: isCollapsed ? '50px' : '250px', transition: 'width 0.3s' }}
      >
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip>{isCollapsed ? 'Expand NavBar' : 'Collapse NavBar'}</Tooltip>}
        >
          <Button
            variant={mode}
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="toggle-button"
            style={{
              position: 'absolute',
              top: '10px',
              right: isCollapsed ? '-25px' : '-35px',
              zIndex: 1000,
              borderRadius: '50%',
            }}
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </OverlayTrigger>

        <Navbar className="flex-column align-items-start p-3 h-100" data-bs-theme={mode}>
          <Nav className="flex-column w-100">
            {sections.map((section) => (
              <OverlayTrigger
                delay={{ hide: 450, show: 300 }}
                overlay={<Tooltip>{section.title}</Tooltip>}
                placement="right"
                key={section.id}
              >
                <Nav.Link
                  onClick={() => setCurrentSection(section.id)}
                  active={currentSection === section.id}
                >
                  {getIcon(section.id)}
                  {isCollapsed ? section.title.charAt(0) : section.title}
                </Nav.Link>
              </OverlayTrigger>
            ))}
          </Nav>
        </Navbar>
      </div>

      {/* Content Area */}
      <div className="content-area flex-grow-1 p-3">
        <div className="section-container">
          <div className="section-actions mb-3">
            <Button
              variant="secondary"
              onClick={() => handleNavigateSection('prev')}
              disabled={sections.findIndex((s) => s.id === currentSection) === 0}
              className="me-2"
            >
              Previous
            </Button>
            <Button
              variant="primary"
              onClick={() => handleSectionSave(currentSection)}
              className="me-2"
              disabled={disabled}
            >
              Save Section
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleNavigateSection('next')}
              disabled={
                sections.findIndex((s) => s.id === currentSection) ===
                sections.length - 1
              }
            >
              Next
            </Button>
          </div>
          {renderSection(activeSection)}
        </div>
      </div>
    </div>
  );
};

export default FormTab;
