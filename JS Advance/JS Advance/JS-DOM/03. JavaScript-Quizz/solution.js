function solve() {
  
  let questions = document.getElementsByTagName("section");
  let quizzie = document.getElementById("quizzie");
  let result = document.querySelector(".results-inner h1");

  let correctAnswers = ["onclick", "JSON.stringify()","A programming API for HTML and XML documents"];
  let points = 0;
  let counter = 0;

  let handler = (e) => {

    if(e.target.className === "answer-text"){
      questions[counter].style.display = "none";

      let isCorrect = correctAnswers.includes(e.target.innerHTML);

      if(isCorrect){

        points++;
      }
      counter++;

      if(counter < questions.length){

        questions[counter].style.display = "block";
      }

      if (counter === questions.length) {
        quizzie.removeEventListener("click", handler);
        document.getElementById("results").style.display = "block";
        result.innerHTML = correctAnswers.length === points ? 
        "You are recognized as top JavaScript fan!" : `You have ${points} right answers`;
      }
    }
  }

  quizzie.addEventListener("click", handler);
}



