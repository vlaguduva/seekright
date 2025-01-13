import React from 'react';
import { IoCheckmarkCircle, IoAlertCircle } from 'react-icons/io5';

function FormProgress({ progress, currentSection, errors }) {
  return (
    <div className="form-progress">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="progress-stats">
        <span>{Math.round(progress)}% Complete</span>
        <span>Current Section: {currentSection}</span>
      </div>
      {Object.keys(errors).length > 0 && (
        <div className="validation-summary">
          <IoAlertCircle className="error-icon" />
          <span>{Object.keys(errors).length} fields need attention</span>
        </div>
      )}
    </div>
  );
}

export default FormProgress; 