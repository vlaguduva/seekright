import React, { useEffect} from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import '../styles/FormSection.css';

function FormSection({ section, isActive, initialValues = {} }) {
  const formik = useFormikContext();
  

  if (!isActive) return null;

  const renderField = (field) => {
    const fieldName = field.name;
    const fieldOptions = field.options || [];
    const label = field.label;
    const isNumeric = field.type === 'number';
    const isDate = field.type === 'date';
    const otherSelected = fieldOptions.length > 0 && formik.values[fieldName] === 'other';
    const tooltip = field.tooltip;

    return (
      <div key={fieldName} className="form-group">
        <label htmlFor={fieldName}
            data-tooltip-id={`tooltip-${fieldName}`}
            data-tooltip-content={tooltip}>{label}</label>
        <Tooltip id={`tooltip-${fieldName}`} />
        {isDate ? (
          <Field
            type="date"
            id={fieldName}
            name={fieldName}
            className="form-control"
          />
        ) : isNumeric ? (
          <Field
            type="number"
            id={fieldName}
            name={fieldName}
            className="form-control"
            placeholder={`Enter ${label.toLowerCase()}`}
            min="0"
            step={fieldName.includes('area') ? "0.01" : "1"}
          />
        ) : fieldOptions.length > 0 ? (
          <Field
            as="select"
            id={fieldName}
            name={fieldName}
            className="form-control"
          >
            <option value="">Select {label.toLowerCase()}</option>
            {fieldOptions.map(option => (
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
            placeholder={`Enter ${label.toLowerCase()}`}
          />
        )}

        <ErrorMessage
          name={fieldName}
          component="div"
          className="error"
        />
        
        {otherSelected && (
          <div className="form-group nested-field">
            <Field
              type="text"
              id={`${fieldName}Other`}
              name={`${fieldName}Other`}
              className="form-control"
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

  return (
    <div className="form-section active">
      <h2>{section.title}</h2>
      {section.fields && section.fields.map(field => renderField(field))}
    </div>
  );
}

export default FormSection; 