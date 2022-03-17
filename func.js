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
/*
function getAnswer(e, n) {
    var i = e;
    if ("-1" != n.indexOf("_"))
        if ("_" == n.slice(-1))
            for (var r = 0; r < i.length; r++) {
                if ("-1" != i[r].definition.indexOf(c("qDef lang-en TermText")[0].innerHTML.split("_")[0])) return i[r].word;
                if ("-1" != i[r].word.indexOf(c("qDef lang-en TermText")[0].innerHTML.split("_")[0])) return i[r].definition
            } else if ("_" == n[0])
                for (r = 0; r < i.length; r++) {
                    if ("-1" != i[r].definition.indexOf(c("qDef lang-en TermText")[0].innerHTML.split("_").slice(-1)[0])) return i[r].word;
                    if ("-1" != i[r].word.indexOf(c("qDef lang-en TermText")[0].innerHTML.split("_").slice(-1)[0])) return i[r].definition
                } else
                    for (r = 0; r < i.length; r++) {
                        if ("-1" != i[r].definition.indexOf(c("qDef lang-en TermText")[0].innerHTML.split("_").slice(-1)[0]) && "-1" != i[r].definition.indexOf(c("qDef lang-en TermText")[0].innerHTML.split("_")[0])) return i[r].word;
                        if ("-1" != i[r].word.indexOf(c("qDef lang-en TermText")[0].innerHTML.split("_").slice(-1)[0]) && "-1" != i[r].word.indexOf(c("qDef lang-en TermText")[0].innerHTML.split("_")[0])) return i[r].definition
                    }
    var t = [];
    for (r = 0; r < i.length; r++) i[r].definition = i[r].definition.replace("\n", "<br>"), i[r].word = i[r].word.replace("\n", "<br>"), n == i[r].word ? t.push(i[r].definition) : n == i[r].definition && t.push(i[r].word);
    return t[Math.floor(Math.random() * t.length)]
}

function answer(e) {
    return getAnswer(Quizlet.matchModeData.terms, e)
}
btn.click(), setTimeout(() => {
    var e = setInterval(() => {
        ! function() {
            if (c("MatchModeQuestionScatterTile") || c("MatchModeQuestionGridBoard-tile")) {
                for (var n = setTimeout(";"), i = 0; i < n; i++) clearTimeout(i);
                var r = c("MatchModeQuestionScatterTile");
                for (i = 0; i < r.length; i++) {
                    r[i].style.backgroundColor = colors[i];
                    for (var t = 0; t < r.length; t++) r[t].childNodes[0].innerHTML == answer(r[t].childNodes[0].innerHTML) && (r[t].style.backgroundColor = colors[i])
                }
                clearTimeout(e)
            }
        }()
    }, 0)
}, 500);
*/
