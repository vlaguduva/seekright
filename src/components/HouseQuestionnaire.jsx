import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import FormTab from './FormTab';
import { sections, initialValues as defaultInitialValues } from '../utils/houseQuestionnaireFormConfig';
import { houseValidationSchema } from '../utils/validationSchema';
import { useTheme } from '../components/ThemeContext';
// Group sections into tabs
const tabs = [
  {
    id: 'houseQuestionnaire',
    title: 'Hosue Questionnaire',
    sections: sections.filter(s => 
      ['basicInfo', 'approvals', 'waterAndPower', 'infrastructure', 'propertyDetails', 'location',
      'legal', 'documents'].includes(s.id)
    )
  }
];

const mergeStateValues = (state) => {
  if (!state?.values) return null;

  return Object.values(state.values).reduce((acc, sectionState) => {
    if (sectionState?.data) {
      return { ...acc, ...sectionState.data };
    }
    return acc;
  }, {});
};
const HouseQuestionnaire = ({ state = {}, onSectionSave, disabled }) => {
  const { darkMode, mode, toggleDarkMode } = useTheme();
  const formInitialValues = mergeStateValues(state) || defaultInitialValues;  

  const handleSectionSave = (tabComplete, sectionStates) => {
    onSectionSave(tabComplete, sectionStates || []);
  };
  
  return (
    <div className="house-questionnaire" data-bs-theme={mode}>
      <Formik
        initialValues={formInitialValues || {}}
        validationSchema={houseValidationSchema}
        onSubmit={() => {}}
      >
        {({ values, setValues, errors, isSubmitting }) => (
          <Form>
            {tabs.map(tab => (
              <FormTab
                key={tab.id}
                tabId={tab.id}
                title={tab.title}
                sections={tab.sections}
                initialValues={formInitialValues}
                state = {state}
                values = {values}
                setValues = {setValues}
                onSectionSave={handleSectionSave}
                disabled={disabled}
              />
            ))}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default HouseQuestionnaire;