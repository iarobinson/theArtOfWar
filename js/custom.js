
window.onload = init;

function init() {
  var passageButton = document.getElementById("newPassageButton");
  var passageCreate = document.getElementById("passageCreate");
  var passageTitle = document.getElementById("passageTitle");

  passageButton.addEventListener("click", function() {
    var display = generatePassage()
    passageCreate.innerHTML = display.passage;
    passageTitle.innerHTML = display.title;
  });
}

function generatePassage() {
  var chapterNumber = randomChapter();
  var chapter = theArtOfWar.chapter[chapterNumber]
  var randomPassage = chapter.passage[Math.floor(Math.random() * chapter.passage.length)]

  return {title: chapter.title, passage: randomPassage};
}

function randomChapter() {
  theArtOfWar.chapter
}

function randomChapter() {
  return CHAPTERS[Math.floor(Math.random() * CHAPTERS.length)];
}
