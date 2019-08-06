window.onload = init;

function init() {
  var passageButton = document.getElementById("newPassageButton");
  var passageCreate = document.getElementById("passageCreate");
  var passageTitle  = document.getElementById("passageTitle");
  var passageSketch = document.getElementById("passageSketch");

  passageButton.addEventListener("click", function() {
    displayNewPassage();
  });
}

function displayNewPassage() {
  var display = generatePassage()
  passageCreate.innerHTML = display.passage;
  passageSketch.innerHTML = display.sketch;
  passageTitle.innerHTML  = display.title;
  document.getElementById("footer-title").style.display = "none";
}

function generatePassage() {
  var chapterNumber = randomChapter();
  var chapter       = theArtOfWar.chapter[chapterNumber]
  var sketch        = formatSketch(theArtOfWar.chapter[chapterNumber].sketch)
  var randomPassage = chapter.passage[
    Math.floor(Math.random() * chapter.passage.length)
  ]

  return {title: chapter.title, sketch: sketch, passage: randomPassage};
}

function randomChapter() {
  return CHAPTERS[Math.floor(Math.random() * CHAPTERS.length)];
}

function formatSketch(url) {
  return `<a onClick="displayNewPassage()">
            <img src='${url}' style='width:100%;max-width:500px;' />
          </a>`
}
