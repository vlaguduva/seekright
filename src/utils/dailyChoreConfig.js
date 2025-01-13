export const sections = [
  {
    id: 'basicServices',
    title: 'Basic Services',
    fields: [
      {
        name: 'courierService', 
        label: 'Courier Service', 
        tooltip: 'Available courier service options in your area'
      },
      {
        name: 'internetProvider', 
        label: 'Internet Provider', 
        tooltip: 'Available internet provider options in your area'},
      {
        name: 'ironPress', 
        label: 'Iron Press',
        tooltip: 'Available iron press options in your area'
      },
      {
        name: 'cookingGas', 
        label: 'Cooking Gas', 
        tooltip: 'Type of cooking gas connection available'
      },
      {
        name: 'laundry', 
        label: 'Laundry',
        tooltip: 'Laundry service options and accessibility'
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
        tooltip: 'Distance to nearest hospitals and healthcare facilities'
      },
      {
        name: 'clinic', 
        label: 'Clinic',
        tooltip: 'Local clinic availability and services'
      },
      {
        name: 'medicalShop', 
        label: 'Medical Shop',
        tooltip: 'Proximity to pharmacy and medical supplies'
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
        tooltip: 'Availability of domestic help services in the area'
      },
      {
        name: 'maidCharges', 
        label: 'Maid Charges',
        tooltip: 'Typical charges for domestic help services'
      },
      {
        name: 'cookAvailability', 
        label: 'Cook Availability',
        tooltip: 'Availability of cooking help services'
      },
      {
        name: 'cookCharges', 
        label: 'Cook Charges',
        tooltip: 'Typical charges for cooking services'
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
        tooltip: 'Milk delivery service options and timing'
      },
      {
        name: 'provisionsGrocery', 
        label: 'Provisions Grocery',
        tooltip: 'Access to grocery stores and provisions'
      },
      {
        name: 'bigBasketDelivery', 
        label: 'Big Basket Delivery',
        tooltip: 'Online grocery delivery service availability'
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
        tooltip: 'Quality of children\'s social environment'
      },
      {
        name: 'coachingCentres', 
        label: 'Coaching Centres',
        tooltip: 'Proximity to educational support centers'
      },
      {
        name: 'stationaryShop', 
        label: 'Stationary Shop',
        tooltip: 'Access to educational supplies and stationery'
      }
    ]
  }
];

export const fieldOptions = {
  courierService: [
    { value: 'doorStep', label: 'Door Step Pick Up' },
    { value: 'withinSociety', label: 'Within Society' },
    { value: 'outside', label: 'Outside' }
  ],
  internetProvider: [
    { value: 'airtel', label: 'Airtel' },
    { value: 'act', label: 'ACT' },
    { value: 'jio', label: 'JIO' }
  ],
  ironPress: [
    { value: 'doorStep', label: 'Door Step Pick Up' },
    { value: 'withinSociety', label: 'Within Society' },
    { value: 'outside', label: 'Outside' }
  ],
  cookingGas: [
    { value: 'piped', label: 'Piped' },
    { value: 'cylinder', label: 'Cylinder' }
  ],
  laundry: [
    { value: 'doorStep', label: 'Door Step Pick Up' },
    { value: 'withinSociety', label: 'Within Society' },
    { value: 'outside', label: 'Outside' }
  ],
  hospital: [
    { value: 'nearby', label: 'Nearby' },
    { value: 'within2km', label: '<= 2 KM' },
    { value: 'within5km', label: '<=5 KM' },
    { value: 'beyond5km', label: '> 5KM' }
  ],
  milkDelivery: [
    { value: 'doorStep', label: 'Door Step' },
    { value: 'withinSociety', label: 'Within Society' },
    { value: 'outside', label: 'Outside' }
  ],
  maidAvailability: [
    { value: 'good', label: 'Good' },
    { value: 'difficult', label: 'Difficult' }
  ],
  kidsCompany: [
    { value: 'good', label: 'Good' },
    { value: 'spoilt', label: 'Spoilt' }
  ],
  coachingCentres: [
    { value: 'closeBy', label: 'Close By' },
    { value: 'withinReach', label: 'Within Reach' },
    { value: 'farAway', label: 'Far Away' }
  ],
  stationaryShop: [
    { value: 'closeBy', label: 'Close By' },
    { value: 'withinReach', label: 'Within Reach' },
    { value: 'farAway', label: 'Far Away' }
  ],
  provisionsGrocery: [
    { value: 'nearBy', label: 'Near By' },
    { value: 'withinSociety', label: 'Within Society' },
    { value: 'withinReach', label: 'Within Reach' }
  ],
  clinic: [
    { value: 'nearBy', label: 'Near By' },
    { value: 'withinSociety', label: 'Within Society' },
    { value: 'withinReach', label: 'Within Reach' }
  ],
  cookAvailability: [
    { value: 'good', label: 'Good' },
    { value: 'difficult', label: 'Difficult' }
  ],
  medicalShop: [
    { value: 'nearBy', label: 'Near By' },
    { value: 'withinSociety', label: 'Within Society' },
    { value: 'withinReach', label: 'Within Reach' }
  ],
  bigBasketDelivery: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'alternateAvailable', label: 'Alternate Available' }
  ]
};

