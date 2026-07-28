/** Shared calculator content builder for i18n data modules. */
export function calc(content) {
  return {
    title: content.title,
    description: content.description,
    shortDescription: content.shortDescription,
    formula: content.formula,
    assumptions: content.assumptions,
    workedExample: content.workedExample,
    howToMeasure: content.howToMeasure,
    commonMistakes: content.commonMistakes,
    faqs: content.faqs,
    resultLabels: content.resultLabels ?? {},
    inputLabels: content.inputLabels ?? {},
    metaTitle: content.metaTitle,
    metaDescription: content.metaDescription,
  };
}
