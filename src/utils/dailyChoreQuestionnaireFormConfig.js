export const sections = [
  {
    id: 'basicServices',
    title: 'Basic Services',
    fields: [
      {
        name: 'courierService', 
        label: 'Courier Service', 
        tooltip: 'Available courier service options in your area',
        type: 'select',
        options: [
          { value: 'doorStep', label: 'Door Step Pick Up' },
          { value: 'withinSociety', label: 'Within Society' },
          { value: 'outside', label: 'Outside' }
        ],
        
      },
      {
        name: 'internetProvider', 
        label: 'Internet Provider', 
        tooltip: 'Available internet provider options in your area',
        type: 'select',
        options: [
          { value: 'airtel', label: 'Airtel' },
          { value: 'act', label: 'ACT' },
          { value: 'jio', label: 'JIO' }
        ]
      },
      {
        name: 'ironPress', 
        label: 'Iron Press',
        tooltip: 'Available iron press options in your area',
        type: 'select',
        options: [
          { value: 'doorStep', label: 'Door Step Pick Up' },
          { value: 'withinSociety', label: 'Within Society' },
          { value: 'outside', label: 'Outside' }
        ]
      },
      {
        name: 'cookingGas', 
        label: 'Cooking Gas', 
        tooltip: 'Type of cooking gas connection available',
        type: 'select',
        options: [
          { value: 'piped', label: 'Piped' },
          { value: 'cylinder', label: 'Cylinder' }
        ]
      },
      {
        name: 'laundry', 
        label: 'Laundry',
        tooltip: 'Laundry service options and accessibility',
        type: 'select',
        options: [
          { value: 'doorStep', label: 'Door Step Pick Up' },
          { value: 'withinSociety', label: 'Within Society' },
          { value: 'outside', label: 'Outside' }
        ]
      }
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    fields: [
      {
        name: 'hospital', 
        label: 'Hospital',
        tooltip: 'Distance to nearest hospitals and healthcare facilities',
        type: 'select',
        options: [
          { value: 'nearby', label: 'Nearby' },
          { value: 'within2km', label: '<= 2 KM' },
          { value: 'within5km', label: '<=5 KM' },
          { value: 'beyond5km', label: '> 5KM' }
        ]
      },
      {
        name: 'clinic', 
        label: 'Clinic',
        tooltip: 'Local clinic availability and services',
        type: 'select',
        options: [
          { value: 'nearBy', label: 'Near By' },
          { value: 'withinSociety', label: 'Within Society' },
          { value: 'withinReach', label: 'Within Reach' }
        ]
      },
      {
        name: 'medicalShop', 
        label: 'Medical Shop',
        tooltip: 'Proximity to pharmacy and medical supplies',
        type: 'select',
        options: [
          { value: 'nearBy', label: 'Near By' },
          { value: 'withinSociety', label: 'Within Society' },
          { value: 'withinReach', label: 'Within Reach' }
        ]
      }
    ]
  },
  {
    id: 'domesticHelp',
    title: 'Domestic Help',
    fields: [
      {
        name: 'maidAvailability', 
        label: 'Maid Availability',
        tooltip: 'Availability of domestic help services in the area',
        type: 'select',
        options: [
          { value: 'good', label: 'Good' },
          { value: 'difficult', label: 'Difficult' }
        ]
      },
      {
        name: 'maidCharges', 
        label: 'Maid Charges',
        tooltip: 'Typical charges for domestic help services',
        type: 'number'
      },
      {
        name: 'cookAvailability', 
        label: 'Cook Availability',
        tooltip: 'Availability of cooking help services',
        type: 'select',
        options: [
          { value: 'good', label: 'Good' },
          { value: 'difficult', label: 'Difficult' }
        ]
      },
      {
        name: 'cookCharges', 
        label: 'Cook Charges',
        tooltip: 'Typical charges for cooking services',
        type: 'number'
      }
    ]
  },
  {
    id: 'dailyNeeds',
    title: 'Daily Needs',
    fields: [
      {
        name: 'milkDelivery', 
        label: 'Milk Delivery',
        tooltip: 'Milk delivery service options and timing',
        type: 'select',
        options: [
          { value: 'doorStep', label: 'Door Step' },
          { value: 'withinSociety', label: 'Within Society' },
          { value: 'outside', label: 'Outside' }
        ]
      },
      {
        name: 'provisionsGrocery', 
        label: 'Provisions Grocery',
        tooltip: 'Access to grocery stores and provisions',
        type: 'select',
        options: [
          { value: 'nearBy', label: 'Near By' },
          { value: 'withinSociety', label: 'Within Society' },
          { value: 'withinReach', label: 'Within Reach' }
        ],
        
      },
      {
        name: 'bigBasketDelivery', 
        label: 'Big Basket Delivery',
        tooltip: 'Online grocery delivery service availability',
        type: 'select',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' },
          { value: 'alternateAvailable', label: 'Alternate Available' }
        ]
      }
    ]
  },
  {
    id: 'education',
    title: 'Education',
    fields: [
      {
        name: 'kidsCompany', 
        label: 'Kids Company',
        tooltip: 'Quality of children\'s social environment',
        type: 'select',
        options: [
          { value: 'good', label: 'Good' },
          { value: 'spoilt', label: 'Spoilt' }
        ]
      },
      {
        name: 'coachingCentres', 
        label: 'Coaching Centres',
        tooltip: 'Proximity to educational support centers',
        type: 'select',
        options: [
          { value: 'closeBy', label: 'Close By' },
          { value: 'withinReach', label: 'Within Reach' },
          { value: 'farAway', label: 'Far Away' }
        ]
      },
      {
        name: 'stationaryShop', 
        label: 'Stationary Shop',
        tooltip: 'Access to educational supplies and stationery',
        type: 'select',
        options: [
          { value: 'closeBy', label: 'Close By' },
          { value: 'withinReach', label: 'Within Reach' },
          { value: 'farAway', label: 'Far Away' }
        ]
      }
    ]
  }
];

export const initialValues = {
  // Basic Services
  courierService: 'doorStep',
  internetProvider: 'airtel',
  ironPress: 'withinSociety',
  cookingGas: 'piped',
  laundry: 'doorStep',

  // Healthcare
  hospital: 'within2km',
  clinic: 'withinSociety',
  medicalShop: 'nearBy',

  // Domestic Help
  maidAvailability: 'good',
  maidCharges: '4000',
  cookAvailability: 'good',
  cookCharges: '8000',

  // Daily Needs
  milkDelivery: 'doorStep',
  provisionsGrocery: 'withinSociety',
  bigBasketDelivery: 'yes',

  // Education
  kidsCompany: 'good',
  coachingCentres: 'closeBy',
  stationaryShop: 'withinReach'
};

