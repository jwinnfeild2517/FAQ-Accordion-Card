let questions = document.querySelectorAll(".question");

/// collects and loops thorough all li elements with the question class and adds a click event listener to each

for (let index = 0; index < questions.length; index++) {
  document.getElementById(index).style.display = "none";
  questions[index].addEventListener("click", function () {
    question_toggle(index);
  });
}

// changes the styling on various page compoents when a question is clicked

function question_toggle(index) {
  //   questions[index].style.color = "red";
  var answer = document.getElementById(index);
  //   debugger;
  var question_text = document.querySelectorAll(`.question p:nth-child(1)`)[
    index
  ];

  var arrow = document.querySelectorAll(`.question img`)[index];

  arrow.style.transform =
    arrow.style.transform == "rotate(180deg)" ? "" : "rotate(180deg)";

  //   debugger;
  question_text.style.fontWeight =
    question_text.style.fontWeight == "bold" ? "normal" : "bold";

  answer.style.display = answer.style.display == "none" ? "block" : "none";
}
