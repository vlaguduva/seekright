export const sections = [
  {
    id: 'basicInfo',
    title: 'Basic Information',
    fields: [
      {
        name: 'propertyName',
        label: 'Property Name',
        type: 'text',
        required: true,
        description: 'Enter the name or identifier for this property',
        tooltip: 'A unique name to identify this property assessment',
        placeholder: 'e.g., Riverside Manor, 123 Oak Street Property'
      },
      {name: 'propertyCompletionDate', label: 'Completion Date', tooltip: 'Date property was completed', type: 'date'},
      {name: 'possessionDate', label: 'Possession Date', tooltip: 'Expected or actual date of possession', type: 'date'}
    ]
  },
  {
    id: 'approvals',
    title: 'Approvals & Documentation',
    fields: [
      {name: 'reraApproval', label: 'RERA Approval', tooltip: 'Real Estate Regulatory Authority approval status', type: 'select', options:  [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
      ]},
      {name: 'OCReceived', label: 'OC Received', tooltip: 'Occupancy Certificate status - Yes, No, or Partial', type: 'select', options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'partial', label: 'Partial' },
        { value: 'other', label: 'Other' }
      ]},
      {name: 'khataType', label: 'Khata Type', tooltip: 'Type of Khata - A, B, E, or e-Khata', type: 'select', options: [
        { value: 'A', label: 'A' },
        { value: 'B', label: 'B' },
        { value: 'E', label: 'E' },
        { value: 'eKhata', label: 'e-Khata' },
        { value: 'other', label: 'Other' }
      ]}
    ]
  },
  {
    id: 'waterAndPower',
    title: 'Water & Power',
    fields: [
      {name: 'waterSource', label: 'Water Source', tooltip: 'Available sources of water supply - Cauvery, Borewell, Tankers', type: 'select', options: [
        { value: 'cauveryOnly', label: 'Cauvery/Corporation Only' },
        { value: 'borewellOnly', label: 'Borewell Only' },
        { value: 'tankersOnly', label: 'Tankers Only' },
        { value: 'cauveryBorewell', label: 'Cauvery/Corporation & Borewell' },
        { value: 'cauveryTankers', label: 'Cauvery/Corporation & Tankers' },
        { value: 'borewellTankers', label: 'Borewell & Tankers' },
        { value: 'cauveryBorewellTankers', label: 'Cauvery/Corporation & Borewell & Tankers' },
        { value: 'other', label: 'Other' }]},
      {name: 'cauveryConnection', label: 'Number of Cauvery Connections', tooltip: 'Number of municipal water connections', type: 'number'},
      {name: 'borewellCount', label: 'Number of Borewells', tooltip: 'Total number of borewells in the property', type: 'number'},
      {name: 'borewellDepth', label: 'Borewell Depth in Feet', tooltip: 'Depth of borewells in feet', type: 'number'},
      {name: 'waterQuality', label: 'Water Quality in TDS', tooltip: 'Water quality measurement in Total Dissolved Solids (TDS)', type: 'number'},
      {name: 'STP', label: 'Sewage Treatment Plant', tooltip: 'Availability and status of Sewage Treatment Plant', type: 'select', options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
      ]},
      {name: 'powerConnection', label: 'Power Connection Type', tooltip: 'Type of electricity connection - Domestic/Commercial', type: 'select', options: [
        { value: 'bescomDomestic', label: 'Bescom - Domestic' },
        { value: 'bescomCommercial', label: 'Bescom - Commercial' },
        { value: 'bescomCommercialToDomestic', label: 'Bescom - Commercial now, later Domestic' },
        { value: 'noConnection', label: 'No Connection' },
        { value: 'other', label: 'Other' }
      ]},
      {name: 'powerConnectionOwnership', label: 'Power Connection Ownership', tooltip: 'Who owns the power connection - Builder/Owner', type: 'select', options: [
        { value: 'owner', label: 'Owner' },
        { value: 'builder', label: 'Builder' },
        { value: 'other', label: 'Other' }
      ]},
      {name: 'powerBackup', label: 'Power Backup Availability', tooltip: 'Type and extent of power backup available', type: 'select', options: [
        { value: 'yes', label: 'Yes' },
        { value: 'essentials', label: 'Essentials' },
        { value: 'no', label: 'No' }
      ]}
    ]
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    fields: [
      {name: 'approachRoadWidth', label: 'Approach Road Width in Feet', tooltip: 'Width of the approach road in feet', type: 'number'},
      {name: 'approachRoadCondition', label: 'Approach Road Condition', tooltip: 'Current condition of the approach road', type: 'select', options: [ {value: 'good', label: 'Good'}, {value: 'ok', label: 'Okayish'}, {value: 'Bad', label: 'Bad'}, {value: 'other', label: 'Other'}]},
      {name: 'numberOfApproachRoads', label: 'Number of Approach Roads', tooltip: 'Number of roads leading to the property', type: 'select', options: [ {value: '1', label: '1'}, {value: '2', label: '2'}, {value: 'deadEnd', label: 'Dead End'}, {value: 'other', label: 'Other'}]},
      {name: 'corridorWidth', label: 'Corridor Width in Feet', tooltip: 'Width of internal corridors in feet', type: 'number'},
      {name: 'insideRoadWidth', label: 'Inside Road Width in Feet', tooltip: 'Width of internal roads in feet', type: 'number'},
      {name: 'numberOfLifts', label: 'Number of Lifts', tooltip: 'Total number of elevators in the building', type: 'number'},
      {name: 'liftMaintenanceQuality', label: 'Lift Maintenance Quality', tooltip: 'Quality of lift maintenance and service', type: 'select', options: [ {value: 'good', label: 'Good'}, {value: 'ok', label: 'Okayish'}, {value: 'poor', label: 'Poor'}, {value: 'other', label: 'Other'}]},
      {name: 'fireEscapeStairs', label: 'Number of Fire Escape Stairs', tooltip: 'Number of emergency exit staircases', type: 'number'},
      {name: 'fireExtinguishersPerFloor', label: 'Number of Fire Extinguishers Per Floor', tooltip: 'Number of fire extinguishers available on each floor', type: 'number'}
    ]
  },
  {
    id: 'propertyDetails',
    title: 'Property Details',
    fields: [
      {name: 'facingDirection', label: 'Facing Direction', tooltip: 'Direction the property faces (N/S/E/W)', type: 'select', options: [
        { value: 'north', label: 'North' },
        { value: 'northeast', label: 'Northeast' },
        { value: 'east', label: 'East' },
        { value: 'southeast', label: 'Southeast' },
        { value: 'south', label: 'South' },
        { value: 'southwest', label: 'Southwest' },
        { value: 'west', label: 'West' },
        { value: 'northwest', label: 'Northwest' }
      ]},
      {name: 'balconyView', label: 'Balcony View', tooltip: 'View from the balcony - garden, pool, etc.', type: 'select', options: [
        { value: 'garden', label: 'Garden' },
        { value: 'pool', label: 'Pool' },
        { value: 'well', label: 'Well of the building' },
        { value: 'other', label: 'Other' }
      ]},
      {name: 'propertyType', label: 'Property Type', tooltip: 'Type of property - Apartment, Villa, Plot', type: 'select', options:  [
        { value: 'apartment', label: 'Apartment' },
        { value: 'villa', label: 'Villa' },
        { value: 'plot', label: 'Plotted Development' },
        { value: 'other', label: 'Other' }
      ]},
      {name: 'floorNumber', label: 'Floor Number', tooltip: 'Floor number of the unit', type: 'number'},
      {name: 'totalFloors', label: 'Total Floors', tooltip: 'Total number of floors in the building', type: 'number'},
      {name: 'sunlight', label: 'Sunlight', tooltip: 'Amount of natural sunlight received', type: 'select', options: [ {value: 'good', label: 'Good'}, {value: 'ok', label: 'Okayish'}, {value: 'Bad', label: 'Bad'}, {value: 'other', label: 'Other'}]},
      {name: 'ventilation', label: 'Ventilation', tooltip: 'Quality of natural air circulation', type: 'select', options: [ {value: 'good', label: 'Good'}, {value: 'ok', label: 'Okayish'}, {value: 'Bad', label: 'Bad'}, {value: 'other', label: 'Other'}]},
      {name: 'superBuiltUpArea', label: 'Super Built Up Area in Sq.ft', tooltip: 'Total area including common areas in square feet', type: 'number'},
      {name: 'carpetArea', label: 'Carpet Area in Sq.ft', tooltip: 'Actual usable floor area in square feet', type: 'number'},
      {name: 'sbaCaRatio', label: 'Super Built Up Area to Carpet Area Ratio', tooltip: 'Ratio between super built-up area and carpet area', type: 'select', options: [
        { value: 'good', label: 'Good' },
        { value: 'carpetAreaTooSmall', label: 'Carpet Area Too Small' },
        { value: 'other', label: 'Other' }
      ]},
      {name: 'numberOfBedrooms', label: 'Number of Bedrooms', tooltip: 'Total number of bedrooms', type: 'number'},
      {name: 'numberOfBalconies', label: 'Number of Balconies', tooltip: 'Total number of balconies', type: 'number'},
      {name: 'balconyDetails', label: 'Balcony Details', tooltip: 'Size and features of balconies', type: 'number'},
      {name: 'commonWalls', label: 'Common Walls', tooltip: 'Number of walls shared with adjacent units', type: 'select', options: [
        { value: 'minimal', label: 'Minimal - One Wall' },
        { value: 'moderate', label: 'Moderate - Two Walls' },
        { value: 'extensive', label: 'Extensive - Multiple Walls' },
        { value: 'none', label: 'None' }
      ]},
      {name: 'uds', label: 'Undivided Share', tooltip: 'Undivided share of land', type: 'number'},
      {name: 'amenities', label: 'Amenities', tooltip: 'Available facilities and amenities', type: 'text'},
      {name: 'visitorParking', label: 'Number of Visitor Parking Slots', tooltip: 'Number of parking spaces for visitors', type: 'number'},
      {name: 'parking', label: 'Number of Parking Slots', tooltip: 'Number of allocated parking spaces', type: 'number'},
      {name: 'parkingType', label: 'Parking Type', tooltip: 'Type of parking - Covered, Open, Basement', type: 'select', options: [
        { value: 'groundOpen', label: 'Ground Open' },
        { value: 'groundCovered', label: 'Ground Covered' },
        { value: 'basement1', label: 'Basement 1' },
        { value: 'basement2', label: 'Basement 2' },
        { value: 'basement3', label: 'Basement 3' },
        { value: 'basement4', label: 'Basement 4' },
        { value: 'basement5', label: 'Basement 5' },
        { value: 'other', label: 'Other' }
      ]},
      {name: 'interiorStatus', label: 'Interior Status', tooltip: 'Current condition of interior finishes', type: 'select', options: [
        { value: 'ready', label: 'Ready' },
        { value: 'readyBadQuality', label: 'Ready, Bad Quality' },
        { value: 'noInterior', label: 'No Interior' },
        { value: 'other', label: 'Other' }
      ]},
      {name: 'floorPlan', label: 'Floor Plan', tooltip: 'Layout and design of the floor plan', type: 'select', options:  [
        { value: 'good', label: 'Good' },
        { value: 'canLiveWithIt', label: 'Okay, can live with it' },
        { value: 'cramped', label: 'Cramped' },
        { value: 'other', label: 'Other' }
      ]}
    ]
  },
  {
    id: 'location',
    title: 'Location & Surroundings',
    fields: [
      {name: 'locality', label: 'Locality', tooltip: 'Name and characteristics of the neighborhood', type: 'text'},
      {name: 'surroundings', label: 'Surroundings', tooltip: 'Type of surrounding development and environment', type: 'select', options: [
        { value: 'residential', label: 'Residential' },
        { value: 'commercial', label: 'Commercial' },
        { value: 'industrial', label: 'Industrial' },
        { value: 'illegalOccupancy', label: 'Illegal Occupancy' },
        { value: 'cemetery', label: 'Cemetery' },
        { value: 'dumpingYard', label: 'Dumping Yard' },
        { value: 'graveyard', label: 'Graveyard' },
        { value: 'landfill', label: 'Landfill' },
        { value: 'other', label: 'Other' }
      ]},
      {name: 'distanceFromMainRoad', label: 'Distance From Main Road in Kms', tooltip: 'Distance to the nearest main road in kilometers', type: 'number'},
      {name: 'distanceFromOffice1', label: 'Distance from Office 1 in Kms', tooltip: 'Distance to primary workplace in kilometers', type: 'number'},
      {name: 'distanceFromOffice2', label: 'Distance from Office 2 in Kms', tooltip: 'Distance to secondary workplace in kilometers', type: 'number'},
      {name: 'nearbyFacilities', label: 'Nearby Facilities (distance in Kms)', tooltip: 'Available facilities in the vicinity'},
      {name: 'publicTransport', label: 'Public Transport', tooltip: 'Accessibility to public transportation', type: 'select', options: [ {value:'accessible', label: 'Accessible'}, {value: 'relyOnAutoCab',label: 'Rely on Auto Rickshaws & Cabs'}, { value: 'other', label: 'Other'}]},
      {name: 'trafficCondition', label: 'Traffic Condition', tooltip: 'Typical traffic conditions in the area', options: [ {value:'busy', label: 'Busy'}, {value:'busyMorningEveningHours', label: 'BusyMorningEveningHours'}, {value: 'relaxed',label: 'Relaxed'}, { value: 'other', label: 'Other'}]},
      {name: 'noiseLevel', label: 'Noise Level in Dbl', tooltip: 'Ambient noise levels in the area', type: 'number'},
      {name: 'nearestSchool', label: 'Nearest School (distance in Kms)', tooltip: 'Name & Distance to nearest school in kilometers', type: 'text'},
      {name: 'nearestHospital', label: 'Nearest Hospital (distance in Kms)', tooltip: 'Name & Distance to nearest hospital in kilometers', type: 'text'},
      {name: 'nearestMarket', label: 'Nearest Market (distance in Kms)', tooltip: 'Name & Distance to nearest market in kilometers', type: 'text'},
      {name: 'nearestMall', label: 'Nearest Mall (distance in Kms)', tooltip: 'Name & Distance to nearest shopping mall in kilometers', type: 'text'},
      {name: 'nearestSuperMarket', label: 'Nearest Super Market (distance in Kms)', tooltip: 'Name & Distance to nearest supermarket in kilometers', type: 'text'},
      {name: 'nearestRailwayStation', label: 'Nearest Railway Station (distance in Kms)', tooltip: 'Name & Distance to nearest railway station in kilometers', type: 'text'},
      {name: 'nearestBusStop', label: 'Nearest Bus Stop (distance in Kms)', tooltip: 'Name & Distance to nearest bus stop in kilometers', type: 'text'},
      {name: 'nearestMetroStation', label: 'Nearest Metro Station (distance in Kms)', tooltip: 'Name & Distance to nearest metro station in kilometers', type: 'text'},
      {name: 'nearestPharmacy', label: 'Nearest Pharmacy (distance in Kms)', tooltip: 'Name & Distance to nearest pharmacy in kilometers', type: 'text'},
      {name: 'nearestATM', label: 'Nearest ATM (distance in Kms)', tooltip: 'Name & Distance to nearest ATM in kilometers', type: 'text'}
    ]
  },
  {
    id: 'legal',
    title: 'Legal Assessment',
    fields: [
      {name: 'rajakaluveEncroachment', label: 'Rajakaluve Encroachment', tooltip: 'Status of storm water drain encroachment', type: 'select', options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'other', label: 'Other' }
      ]},
      {name: 'nalaPresence', label: 'Nala Presence', tooltip: 'Presence and distance of drainage canal', type: 'select', options: [
        { value: '<100m', label: '<100m' },
        { value: '100-200m', label: '100-200m' },
        { value: '200-300m', label: '200-300m' },
        { value: '>300m', label: '>300m' },
        { value: 'na', label: 'NA' }
      ]},
      {name: 'highTensionCablePresence', label: 'High Tension Cable Presence', tooltip: 'Presence of high voltage power lines', type: 'select', options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
      ]},
      {name: 'nearbyLakeDrainDirection', label: 'Nearby Lake Drain Direction', tooltip: 'Direction of drainage from nearby water bodies', type: 'select', options: [
        { value: 'away', label: 'Away' },
        { value: 'towards', label: 'Towards' },
        { value: 'na', label: 'NA' }
      ]},
      {name: 'onLoan', label: 'On Loan', tooltip: 'Property mortgage status', type: 'select', options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
      ]},
      {name: 'registered', label: 'Registered', tooltip: 'Registration status of the property', type: 'select', options: [
        { value: 'owner', label: 'Owner' },
        { value: 'builder', label: 'Builder' },
        { value: 'other', label: 'Other' }
      ]},
      {name: 'lakeBuffer', label: 'Lake Buffer Zone', tooltip: 'Compliance with lake buffer zone regulations', type: 'select', options: [
        { value: 'stateLimit', label: 'Compliant with State Limit' },
        { value: 'nationalLimit', label: 'Compliant with National Limit' },
        { value: 'breached', label: 'Breached' },
        { value: 'other', label: 'Other' }
      ]},
      {name: 'propertyTaxPaid', label: 'Property Tax Paid', tooltip: 'Status of property tax payments', type: 'select', options: [
        { value: 'uptodate', label: 'Up to Date' },
        { value: 'partiallyPaid', label: 'Partially Paid' },
        { value: 'no', label: 'No' },
        { value: 'other', label: 'Other' }
      ]},
      {name: 'legalDisputes', label: 'Legal Disputes', tooltip: 'Any ongoing legal issues or disputes', type: 'select', options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'Cleared' },
        { value: 'other', label: 'Other' }
      ]},
      {name: 'titleClear', label: 'Title Clear', tooltip: 'Status of property title clearance', type: 'select', options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'Cleared' },
        { value: 'other', label: 'Other' }
      ]},
      {name: 'encumbrances', label: 'Encumbrances', tooltip: 'Any existing legal claims or liabilities', type: 'select', options: [
        { value: 'reflectCurrentOwner', label: 'Reflects Current Owner' },
        { value: 'reflectPreviousOwner', label: 'Reflects Previous Owner' },
        { value: 'reflectNone', label: 'Reflects None' },
        { value: 'other', label: 'Other' }
      ]},
      {name: 'legalNotes', label: 'Legal Notes', tooltip: 'Additional legal observations and notes', type: 'text'}
    ]
  },
  {
    id: 'safety',
    title: 'Safety',
    fields: [
      {name: 'fireEscapeStairs', label: 'Fire Escape Stairs', tooltip: 'Number and condition of fire escape stairs', type: 'number'},
      {name: 'fireExtinguishersPerFloor', label: 'Fire Extinguishers Per Floor', tooltip: 'Number of fire extinguishers on each floor', type: 'number'},
      {name: 'security', label: 'Security', tooltip: 'Security arrangements and personnel', type: 'select', options: [
        { value: 'full', label: 'At the gates, parking and agency contracted' },
        { value: 'minimum', label: 'Minimum - At the gates' }, 
        { value: 'none', label: 'Nowhere to be seen' },
        { value: 'tooLight', label: 'Too Light' },
        { value: 'other', label: 'Other' }
      ]}
    ]
  }
];

export const fieldOptions = {
  waterSource: [
    { value: 'cauveryOnly', label: 'Cauvery/Corporation Only' },
    { value: 'borewellOnly', label: 'Borewell Only' },
    { value: 'tankersOnly', label: 'Tankers Only' },
    { value: 'cauveryBorewell', label: 'Cauvery/Corporation & Borewell' },
    { value: 'cauveryTankers', label: 'Cauvery/Corporation & Tankers' },
    { value: 'borewellTankers', label: 'Borewell & Tankers' },
    { value: 'cauveryBorewellTankers', label: 'Cauvery/Corporation & Borewell & Tankers' },
    { value: 'other', label: 'Other' }
  ],
  STP: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ],
  propertyType: [
    { value: 'apartment', label: 'Apartment' },
    { value: 'villa', label: 'Villa' },
    { value: 'plot', label: 'Plotted Development' },
    { value: 'other', label: 'Other' }
  ],
  OCReceived:[
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'partial', label: 'Partial' },
    { value: 'other', label: 'Other' }
  ],
  khataType: [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'E', label: 'E' },
    { value: 'eKhata', label: 'e-Khata' },
    { value: 'other', label: 'Other' }
  ],
  powerBackup: [
    { value: 'yes', label: 'Yes' },
    { value: 'essentials', label: 'Essentials' },
    { value: 'no', label: 'No' }
  ],
  powerConnection: [
    { value: 'bescomDomestic', label: 'Bescom - Domestic' },
    { value: 'bescomCommercial', label: 'Bescom - Commercial' },
    { value: 'bescomCommercialToDomestic', label: 'Bescom - Commercial now, later Domestic' },
    { value: 'noConnection', label: 'No Connection' },
    { value: 'other', label: 'Other' }
  ],
  powerConnectionOwnership: [
    { value: 'owner', label: 'Owner' },
    { value: 'builder', label: 'Builder' },
    { value: 'other', label: 'Other' }
  ],
  waterQuality: [
    { value: 'good', label: 'Good' },
    { value: 'moderate', label: 'Moderate' },
    { value: 'poor', label: 'Poor' }
  ],
  reraApproval: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ],
  lakeBuffer: [
    { value: 'stateLimit', label: 'Compliant with State Limit' },
    { value: 'nationalLimit', label: 'Compliant with National Limit' },
    { value: 'breached', label: 'Breached' },
    { value: 'other', label: 'Other' }
  ],
  rajakaluveEncroachment: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'other', label: 'Other' }
  ],
  propertyTaxPaid: [
    { value: 'uptodate', label: 'Up to Date' },
    { value: 'partiallyPaid', label: 'Partially Paid' },
    { value: 'no', label: 'No' },
    { value: 'other', label: 'Other' }
  ],
  legalDisputes: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'Cleared' },
    { value: 'other', label: 'Other' }
  ],
  titleClear:  [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'Cleared' },
    { value: 'other', label: 'Other' }
  ],
  encumbrances: [
    { value: 'reflectCurrentOwner', label: 'Reflects Current Owner' },
    { value: 'reflectPreviousOwner', label: 'Reflects Previous Owner' },
    { value: 'reflectNone', label: 'Reflects None' },
    { value: 'other', label: 'Other' }
  ],
  facingDirection: [
    { value: 'north', label: 'North' },
    { value: 'northeast', label: 'Northeast' },
    { value: 'east', label: 'East' },
    { value: 'southeast', label: 'Southeast' },
    { value: 'south', label: 'South' },
    { value: 'southwest', label: 'Southwest' },
    { value: 'west', label: 'West' },
    { value: 'northwest', label: 'Northwest' }
  ],
  commonWalls: [
    { value: 'minimal', label: 'Minimal - One Wall' },
    { value: 'moderate', label: 'Moderate - Two Walls' },
    { value: 'extensive', label: 'Extensive - Multiple Walls' },
    { value: 'none', label: 'None' }
  ],
  balconyView: [
    { value: 'garden', label: 'Garden' },
    { value: 'pool', label: 'Pool' },
    { value: 'well', label: 'Well of the building' },
    { value: 'other', label: 'Other' }
  ],
  surroundings: [
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'illegalOccupancy', label: 'Illegal Occupancy' },
    { value: 'cemetery', label: 'Cemetery' },
    { value: 'dumpingYard', label: 'Dumping Yard' },
    { value: 'graveyard', label: 'Graveyard' },
    { value: 'landfill', label: 'Landfill' },
    { value: 'other', label: 'Other' }
  ],
  sbaCaRatio: [
    { value: 'good', label: 'Good' },
    { value: 'carpetAreaTooSmall', label: 'Carpet Area Too Small' },
    { value: 'other', label: 'Other' }
  ],
  parkingType: [
    { value: 'groundOpen', label: 'Ground Open' },
    { value: 'groundCovered', label: 'Ground Covered' },
    { value: 'basement1', label: 'Basement 1' },
    { value: 'basement2', label: 'Basement 2' },
    { value: 'basement3', label: 'Basement 3' },
    { value: 'basement4', label: 'Basement 4' },
    { value: 'basement5', label: 'Basement 5' },
    { value: 'other', label: 'Other' }
  ],
  interiorStatus: [
    { value: 'ready', label: 'Ready' },
    { value: 'readyBadQuality', label: 'Ready, Bad Quality' },
    { value: 'noInterior', label: 'No Interior' },
    { value: 'other', label: 'Other' }
  ],
  floorPlan: [
    { value: 'good', label: 'Good' },
    { value: 'canLiveWithIt', label: 'Okay, can live with it' },
    { value: 'cramped', label: 'Cramped' },
    { value: 'other', label: 'Other' }
  ],
  security: [
    { value: 'full', label: 'At the gates, parking and agency contracted' },
    { value: 'minimum', label: 'Minimum - At the gates' }, 
    { value: 'none', label: 'Nowhere to be seen' },
    { value: 'tooLight', label: 'Too Light' },
    { value: 'other', label: 'Other' }
  ],
  nalaPresence: [
    { value: '<100m', label: '<100m' },
    { value: '100-200m', label: '100-200m' },
    { value: '200-300m', label: '200-300m' },
    { value: '>300m', label: '>300m' },
    { value: 'na', label: 'NA' }
  ],
  highTensionCablePresence: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ],
  nearbyLakeDrainDirection: [
    { value: 'away', label: 'Away' },
    { value: 'towards', label: 'Towards' },
    { value: 'na', label: 'NA' }
  ],
  onLoan: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ],
  registered: [
    { value: 'owner', label: 'Owner' },
    { value: 'builder', label: 'Builder' },
    { value: 'other', label: 'Other' }
  ],

  // Add more field options as needed
};

export const fieldProperties = {
  fireExtinguishersPerFloor: {type: 'number'},
  waterQuality: {type: 'number'},
  powerConnection: {type: 'select'},
  powerConnectionOwnership: {type: 'select'},
  reraApproval: {type: 'radio'},
  propertyAge: {type: 'number'},
  possessionDate: {type: 'date'},

  reraNumber: {type: 'number'},
  OCReceived: {type: 'select'},
  khataType: {type: 'select'},

  // Water & Power
  waterSource: {type: 'checkbox'},
  cauveryConnection: {type: 'number'},
  borewellCount: {type: 'number'},
  borewellDepth: {type: 'number'},
  STP: {type: 'number'},
  powerConnection: {type: 'select'},
  powerConnectionOwnership: {type: 'select'},
  powerBackup: {type: 'select'},

  // Infrastructure
  approachRoadWidth: {type: 'number'},
  approachRoadCondition: {type: 'select'},
  numberOfApproachRoads: {type: 'number'},
  corridorWidth: {type: 'number'},
  insideRoadWidth: {type: 'number'},
  numberOfLifts: {type: 'number'},
  liftMaintenanceQuality: {type: 'select'},
  fireEscapeStairs: {type: 'number'},
  fireExtinguishersPerFloo: {type: 'number'},

  // Property Details
  facingDirection: {type: 'select'},
  balconyView: {type: 'select'},
  propertyType: {type: 'select'},
  floorNumber: {type: 'number'},
  totalFloors: {type: 'number'},
  sunlight: {type: 'select'},
  ventilation: {type: 'select'},
  superBuiltUpArea: {type: 'number'},
  carpetArea: {type: 'number'},
  numberOfBedrooms: {type: 'number'},
  numberOfBalconies: {type: 'number'},  
  visitorParking: {type: 'number'},
  parking: {type: 'number'},
  parkingType: {type: 'select'},
  
  // Location & Surroundings
  locality: {type: 'text'},
  surroundings: {type: 'select'},
  distanceFromMainRoad: {type: 'number'},
  distanceFromOffice1: {type: 'number'},
  distanceFromOffice2: {type: 'number'},  
  
  // Legal Assessment
  rajakaluveEncroachment: {type: 'select'},
  lakeBuffer: {type: 'select'},
  propertyTaxPaid: {type: 'select'},
};

export const initialValues = {
  // Basic Information
  propertyName: 'Prestige Lakeside Habitat',
  propertyCompletionDate: '2022-06-15',
  possessionDate: '2022-12-01',

  // Approvals
  reraApproval: 'yes',
  reraNumber: 'PRM/KA/RERA/1251/446/PR/171022/005238',
  OCReceived: 'yes',
  khataType: 'A',

  // Water & Power
  waterSource: 'cauveryBorewell',
  cauveryConnection: '2',
  borewellCount: '3',
  borewellDepth: '800',
  waterQuality: '180',
  STP: 'yes',
  powerConnection: 'bescomDomestic',
  powerConnectionOwnership: 'owner',
  powerBackup: 'yes',

  // Infrastructure
  approachRoadWidth: '40',
  approachRoadCondition: 'good',
  numberOfApproachRoads: '2',
  corridorWidth: '6',
  insideRoadWidth: '20',
  numberOfLifts: '4',
  liftMaintenanceQuality: 'good',
  fireEscapeStairs: '2',
  fireExtinguishersPerFloor: '4',

  // Property Details
  facingDirection: 'east',
  balconyView: 'garden',
  propertyType: 'apartment',
  floorNumber: '12',
  totalFloors: '20',
  sunlight: 'good',
  ventilation: 'good',
  superBuiltUpArea: '1850',
  carpetArea: '1450',
  sbaCaRatio: 'good',
  numberOfBedrooms: '3',
  numberOfBalconies: '2',
  balconyDetails: '120',
  commonWalls: 'minimal',
  uds: '850',
  amenities: 'Swimming Pool, Gym, Club House, Children\'s Play Area',
  visitorParking: '50',
  parking: '2',
  parkingType: 'basement1',
  interiorStatus: 'ready',
  floorPlan: 'good',

  // Location
  locality: 'Varthur, Whitefield',
  surroundings: 'residential',
  distanceFromMainRoad: '0.5',
  distanceFromOffice1: '5',
  distanceFromOffice2: '12',
  nearbyFacilities: 'Schools, Hospitals, Shopping Centers within 2km radius',
  publicTransport: 'accessible',
  trafficCondition: 'busyMorningEveningHours',
  noiseLevel: '65',
  nearestSchool: 'Delhi Public School - 1.2km',
  nearestHospital: 'Columbia Asia - 2.5km',
  nearestMarket: 'Local Market Complex - 0.8km',
  nearestMall: 'Phoenix Marketcity - 3.5km',
  nearestSuperMarket: 'More Megastore - 1km',
  nearestRailwayStation: 'Whitefield - 4km',
  nearestBusStop: 'Varthur Kodi - 0.3km',
  nearestMetroStation: 'Whitefield - 3.5km',
  nearestPharmacy: 'MedPlus - 0.5km',
  nearestATM: 'HDFC Bank ATM - 0.2km',

  // Legal
  rajakaluveEncroachment: 'no',
  nalaPresence: '>300m',
  highTensionCablePresence: 'no',
  nearbyLakeDrainDirection: 'away',
  onLoan: 'yes',
  registered: 'owner',
  lakeBuffer: 'stateLimit',
  propertyTaxPaid: 'uptodate',
  legalDisputes: 'no',
  titleClear: 'yes',
  encumbrances: 'reflectCurrentOwner',
  legalNotes: 'All legal documents verified and clear. Property has necessary approvals.',

  // Safety
  security: 'full',

  // Documents
  propertyPhotos: [],
  documents: []
};