document.getElementById("aiForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent default form submission

  const question = document.getElementById("question").value;
  const responseElement = document.getElementById("response");
  const answerElement = document.getElementById("answer");

  // Check if the input is not empty
  if (!question.trim()) {
    alert("Лутфан саволи дурустро пурсед.");
    return;
  }

  // Show loading message
  answerElement.textContent = "Шумороро меҷӯям...";
  responseElement.style.display = "block";

  // Simulating AI response (you can replace this with any AI-like behavior)
  setTimeout(() => {
    let answer = " ";

    // Simple AI-like responses based on the question
    if (question.toLowerCase().includes("салом")) {
      answer += "Алейкум салом! Умедворем ки шумо хуб ҳастед ба шумо чӣ гуна кӯмак расонида метавонем?";
    } else if (question.toLowerCase().includes("салом алейкум")) {
      answer += "Алейкум салом! Умедворем ки шумо хуб ҳастед ба шумо чӣ гуна кӯмак расонида метавонем?";
    } else if (question.toLowerCase().includes("Ассалом")) {
      answer += "Алейкум салом! Умедворем ки шумо хуб ҳастед ба шумо чӣ гуна кӯмак расонида метавонем?";
    } else if (question.toLowerCase().includes("Шумо чӣ вазифаро иҷро мекунед?")) {
      answer += "Ман Jumma Ai дар масъалаҳои исломи дар доираи донишҳоям ба шумо ҷавоб медиҳам";
    } else if (question.toLowerCase().includes("Шумо ки?")) {
      answer += "Ман Jumma Ai дар масъалаҳои исломи дар доираи донишҳоям ба шумо ҷавоб медиҳам";
    } else if (question.toLowerCase().includes("Сураи Фотиҳа аз чанд оят иборат аст?")) {
      answer += "Сураи Фотиҳа аввалин сура дар Қуръони Карим буда аз 7 оят иборат аст, ";
    } else {
      answer += "Ман ҳоло ҷавоб надорам, аммо ман меомузам!";
    }

    answerElement.textContent = answer;
  }, 1000);  // Simulating a delay for AI response
});
