import React from 'react';
import { Formik, Form } from 'formik';
import FormTab from './FormTab';
import { sections, initialValues as defaultInitialValues} from '../utils/dailyChoreQuestionnaireFormConfig';
import { dailyChoreValidationSchema } from '../utils/dailyChoreValidationSchema';
import { useTheme } from '../components/ThemeContext';

// Group sections into tabs
const tabs = [
  {
    id: 'dailyChore',
    title: 'Basic Services',
    sections: sections.filter(s => 
      ['basicServices', 'healthcare', 'domesticHelp', 'dailyNeeds', 'education'].includes(s.id)
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

const DailyChoreQuestionnaire = ({ state = {}, onSectionSave, disabled }) => {
  const { darkMode, mode, toggleDarkMode } = useTheme();

  const formInitialValues = mergeStateValues(state) || defaultInitialValues;  

  const handleSectionSave = (tabComplete, sectionStates) => {
    onSectionSave(tabComplete, sectionStates || []);
  };

  
  return (
    <div className="daily-chore-questionnaire" >
      <Formik
        initialValues={formInitialValues || {}}
        validationSchema={dailyChoreValidationSchema}
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

export default DailyChoreQuestionnaire;