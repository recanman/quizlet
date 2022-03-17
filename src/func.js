// made by recanman
function c(id) {
  return document.getElementsByClassName(id)
}

const termTypes = ["Quizlet.assistantModeData", "Quizlet.learnGameData.allTerms", "Quizlet.testModeData.terms", "Quizlet.spellModeData.spellGameData.termsById", "Quizlet.matchModeData.terms", "Quizlet.gravityModeData.terms", 0]

function getAnswer(question, onlyTerms) {
  var terms

  termTypes.forEach(term => {
    try {
      term = eval(term)
      if (term) {terms = term}
    } catch (e) {}
  })

  if (onlyTerms) {
    return terms
  } else {
    return getAnswer(terms, question)
  }
}
