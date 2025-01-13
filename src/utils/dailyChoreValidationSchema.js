import * as Yup from 'yup';

export const dailyChoreValidationSchema = Yup.object().shape({
  // Basic Services
  courierService: Yup.string()
    .required('Please select courier service availability'),
  internetProvider: Yup.string()
    .required('Please select internet provider'),
  ironPress: Yup.string()
    .required('Please select iron press service availability'),
  cookingGas: Yup.string()
    .required('Please select cooking gas service'),
  laundry: Yup.string()
    .required('Please select laundry service availability'),

  // Healthcare
  hospital: Yup.string()
    .required('Please select hospital availability'),
  clinic: Yup.string()
    .required('Please select clinic availability'),
  medicalShop: Yup.string()
    .required('Please select medical shop availability'),

  // Domestic Help
  maidAvailability: Yup.string()
    .required('Please select maid availability'),
  maidCharges: Yup.number()
    .when('maidAvailability', {
      is: 'yes',
      then: () => Yup.number()
        .required('Please specify maid charges')
        .min(0, 'Charges cannot be negative')
        .max(50000, 'Charges seem too high'),
      otherwise: () => Yup.number()
    }),
  cookAvailability: Yup.string()
    .required('Please select cook availability'),
  cookCharges: Yup.number()
    .when('cookAvailability', {
      is: 'yes',
      then: () => Yup.number()
        .required('Please specify cook charges')
        .min(0, 'Charges cannot be negative')
        .max(50000, 'Charges seem too high'),
      otherwise: () => Yup.number()
    }),

  // Daily Needs
  milkDelivery: Yup.string()
    .required('Please select milk delivery availability'),
  provisionsGrocery: Yup.string()
    .required('Please select provisions/grocery availability'),
  bigBasketDelivery: Yup.string()
    .required('Please select BigBasket delivery availability'),

  // Education
  kidsCompany: Yup.string()
    .required('Please select kids company availability'),
  coachingCentres: Yup.string()
    .required('Please select coaching centres availability'),
  stationaryShop: Yup.string()
    .required('Please select stationary shop availability')
}); 