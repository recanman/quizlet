// made by recanman
const btn = c("UIButton UIButton--hero")[0]
if (btn) {btn.click()}

const colors = ["#FF0000", "#FF6600", "#FFFF00", "#00FF00", "#00FFFF", "#0033FF", "#FF00FF", "#CC00FF", "#6E0DD0", "#C0C0C0", "#FFFFFF", "#A52A2A", "#F6CFFF", "#CFD9FF", "#FBFFA3", "#FFD1A3", "#710000"]

setTimeout(() => {
  const loop = setInterval(() => {
    waitForMatch()
  }, 0)

  function waitForMatch() {
    if (!c("MatchModeQuestionScatterTile") && !c("MatchModeQuestionGridBoard-tile")) {return}
    for (var F = setTimeout(";"), i = 0; i < F; i++) {clearTimeout(i)}

    const answers = getAnswer(undefined, true)
    const terms = c("FormattedText notranslate TermText")
    var definitions = {}

    Object.keys(terms).forEach(term => {
      term = terms[term]
      definitions[term.getAttribute("aria-label")] = term.parentElement
    })

    Object.keys(answers).forEach((answer, index) => {
      answer = answers[answer]
      const word = answer.word
      const def = answer.definition

      try {
        definitions[def].style.background = colors[index]
        definitions[word].style.background = colors[index]

        console.log(`Answered word ${word} with definition ${def}.`)
      } catch (e) {
        console.log(`Failed to answer word ${word} with definition ${def}.`)
      }
    })

    clearTimeout(loop)
  }
}, 500)
