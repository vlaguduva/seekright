// Prompt template function
const generatePropertyPrompt = (formData) => {

  const escapeString = (str) => String(str ?? '')
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\"')
        .replace(/'/g, '\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\t/g, '\\t');

  const processDataSection = (sectionData) => {
    if (!sectionData) return '';
    return Object.entries(sectionData)
      .map(([key, value]) => {
        const section = value?.data || {};
        return Object.entries(section)
          .map(([k, v]) => `${escapeString(k)}=${escapeString(v)}`)
          .join('\n');
      })
      .filter(Boolean)
      .join('\n');
  };

  const templatize = (formData) => {
    const systemContext = `You are an expert real estate analyst with extensive experience in property valuation, 
    market analysis, and investment consulting. Your analysis should be comprehensive, data-driven, and consider both 
    immediate and long-term factors. Format your response in clean, semantic HTML with proper heading hierarchy.`;

    const dataAnalysisPrompt = `
    Analyze this property comprehensively using the following data:

    PROPERTY DETAILS:
    ${processDataSection(formData.house.values)}

    LOCATION & AMENITIES:
    ${processDataSection(formData.dailyChore.values)}

    Consider these key aspects in your analysis:
    - Property condition and features
    - Location value and future potential
    - Price versus market value
    - Infrastructure and amenities
    - Investment potential
    - Quality of life factors`;

    const outputInstructions = `
    Structure your response as follows:

    1. <h1>Property Analysis: [Property Address]</h1>

    2. <h2>Executive Summary</h2>
      - Provide a clear buy/don't buy recommendation
      - Support with 2-3 key decisive factors
      - Include estimated ROI potential

    3. <h2>Key Advantages</h2>
      - List major strengths using <h3> for categories
      - Support each point with specific data
      - Include both property and location advantages

    4. <h2>Risk Assessment</h2>
      - Identify potential concerns using <h3> for categories
      - Include mitigation strategies where applicable
      - Rate risks as high/medium/low impact

    5. <h2>Lifestyle Analysis</h2>
      - Evaluate daily living convenience
      - Assess community and social factors
      - Consider future development impact

    6. <h2>Final Recommendations</h2>
      - Provide actionable next steps
      - Include negotiation strategy if applicable
      - Suggest property-specific considerations

    Wrap the entire response in a <div class="property-analysis"> tag.
    Use semantic HTML throughout (sections, lists, etc.).
    Include relevant data points to support each conclusion.`;

        return `${systemContext}\n\n${dataAnalysisPrompt}\n\n${outputInstructions}`;
  }
  return templatize(formData);
};

export default generatePropertyPrompt;