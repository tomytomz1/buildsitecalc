/** Shared calculator content builder for i18n data modules. */
export function calc(content) {
  return {
    title: content.title,
    description: content.description,
    shortDescription: content.shortDescription,
    formula: content.formula,
    assumptions: content.assumptions,
    workedExample: content.workedExample,
    ...(content.sections ? { sections: content.sections } : {}),
    howToMeasure: content.howToMeasure,
    commonMistakes: content.commonMistakes,
    faqs: content.faqs,
    ...(content.dataTables ? { dataTables: content.dataTables } : {}),
    ...(content.references ? { references: content.references } : {}),
    ...(content.lastUpdated ? { lastUpdated: content.lastUpdated } : {}),
    resultLabels: content.resultLabels ?? {},
    inputLabels: content.inputLabels ?? {},
    metaTitle: content.metaTitle,
    metaDescription: content.metaDescription,
  };
}
