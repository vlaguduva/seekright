import React from 'react';
import { sections } from '../utils/dailyChoreConfig';

function ReviewSection({ values, onEdit }) {
  const formatValue = (value) => {
    if (typeof value === 'number') {
      return `₹${value}`;
    }
    return value;
  };

  const renderSection = (section) => (
    <div key={section.id} className="review-section">
      <h3>{section.title}</h3>
      <div className="review-fields">
        {section.fields.map(field => (
          <div key={field} className="review-field">
            <span className="field-label">
              {field.split(/(?=[A-Z])/).join(' ')}:
            </span>
            <span className="field-value">
              {formatValue(values[field])}
            </span>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="edit-btn"
        onClick={() => onEdit(section.id)}
      >
        Edit {section.title}
      </button>
    </div>
  );

  return (
    <div className="review-container">
      <h2>Review Your Assessment</h2>
      {sections.map(renderSection)}
      
      <div className="review-notes">
        <h3>Additional Notes</h3>
        <p>{values.additionalNotes}</p>
      </div>
    </div>
  );
}

export default ReviewSection; 