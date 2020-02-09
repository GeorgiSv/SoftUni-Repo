function solve() {
  
  let questions = document.getElementsByClassName("quiz-step step1 current");

  for (let index = 0; index < questions.length - 1; index++) {
    
    let currnetElement = questions[index];

    let correctAnswers = document.getElementsByClassName("quiz-answer low-value")[0];
    

    currnetElement.className = "none";
    let next = currnetElement.nextElementSibling();

    
  }
}
