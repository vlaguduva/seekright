import * as Yup from 'yup';

// House Assessment Schema
export const houseValidationSchema = Yup.object().shape({
  // Basic Information
  projectName: Yup.string()
    .required('Project name is required')
    .min(3, 'Project name must be at least 3 characters'),
  propertyAge: Yup.string()
    .required('Age of property is required'),
  possessionDate: Yup.date()
    .required('Possession date is required')
    .max(new Date(), 'Possession date cannot be in the future'),

  // Approvals
  reraApproval: Yup.string()
    .required('Please select RERA approval status')
    .oneOf(['yes', 'no'], 'Please select either Yes or No'),
  reraNumber: Yup.string()
    .when('reraApproval', {
      is: 'yes',
      then: () => Yup.string()
        .required('RERA number is required when RERA approval is available')
        .min(3, 'RERA number must be at least 3 characters')
        .max(50, 'RERA number must not exceed 50 characters'),
      otherwise: () => Yup.string()
    }),
  OCReceived: Yup.string()
    .required('Please select OC status')
    .oneOf(['yes', 'partial', 'no'], 'Please select a valid option'),
  khataType: Yup.string()
    .required('Please select Khata type'),
  khataTypeOther: Yup.string()
    .when('khataType', {
      is: 'other',
      then: () => Yup.string()
        .required('Please specify Khata type')
        .min(3, 'Must be at least 3 characters')
        .max(255, 'Must not exceed 255 characters'),
      otherwise: () => Yup.string()
    }),

  // Water & Power
  waterSource: Yup.array()
    .min(1, 'Please select at least one water source')
    .of(Yup.string().oneOf(['cauvery', 'borewell', 'tankers', 'other'])),
  STP: Yup.string()
    .required('Please specify if STP is available'),
  powerBackup: Yup.string()
    .required('Please specify power backup availability'),
  cauveryConnection: Yup.string()
    .when('waterSource', {
      is: (val) => ['cauveryOnly', 'cauveryBorewell', 'cauveryBorewellTankers'].includes(val),
      then: () => Yup.string().required('Required when using Cauvery water'),
      otherwise: () => Yup.string()
    }),
  borewellCount: Yup.number()
    .when('waterSource', {
      is: (val) => ['borewellOnly', 'cauveryBorewell', 'borewellTankers', 'cauveryBorewellTankers'].includes(val),
      then: () => Yup.number()
        .required('Required when using borewell')
        .min(1, 'Must have at least 1 borewell'),
      otherwise: () => Yup.number()
    }),
  borewellDepth: Yup.number()
    .when('waterSource', {
      is: (val) => ['borewellOnly', 'cauveryBorewell', 'borewellTankers', 'cauveryBorewellTankers'].includes(val),
      then: () => Yup.number()
        .required('Required when using borewell')
        .min(1, 'Depth must be greater than 0'),
      otherwise: () => Yup.number()
    }),

  // Safety
  fireEscapeStairs: Yup.number()
    .required('Please enter number of fire escape stairs')
    .min(0, 'Must be 0 or greater'),
  
  fireExtinguishersPerFloor: Yup.number()
    .required('Please enter number of fire extinguishers per floor')
    .min(0, 'Must be 0 or greater'),
  
  powerConnection: Yup.string()
    .required('Please select power connection type'),
  
  powerConnectionOwnership: Yup.string()
    .required('Please select power connection ownership'),

  waterQuality: Yup.string()
    .required('Please enter water quality description'),

  // ... rest of the house validation schema ...
});

// Day2Day Assessment Schema
export const day2dayValidationSchema = Yup.object().shape({
  // Basic Services
  courierService: Yup.string()
    .required('Please select courier service availability'),
  internetProvider: Yup.string()
    .required('Please select internet provider'),
  internetSpeed: Yup.string()
    .required('Please specify internet speed'),
  internetReliability: Yup.string()
    .required('Please rate internet reliability'),

  // ... rest of the day2day validation schema ...
});

// Daily Chore Assessment Schema
export const dailyChoreValidationSchema = Yup.object().shape({
  // Cleaning Services
  houseCleaning: Yup.string()
    .required('Please select house cleaning frequency'),
  housekeepingCharges: Yup.number()
    .required('Please specify housekeeping charges')
    .min(0, 'Charges cannot be negative')
    .max(50000, 'Charges seem too high'),

  // ... rest of the daily chore validation schema ...
});

// Helper functions
export const getValidationError = (fieldName, errors) => {
  return errors[fieldName] ? errors[fieldName] : '';
};

export const calculateProgress = (values, schema) => {
  const totalFields = Object.keys(schema.fields).length;
  const filledFields = Object.keys(values).filter(key => {
    const value = values[key];
    return value !== '' && value !== null && value !== undefined &&
           !(Array.isArray(value) && value.length === 0);
  }).length;
  return (filledFields / totalFields) * 100;
}; 