document.getElementById("aiForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Предотвращаем отправку формы

  const question = document.getElementById("question").value.trim().toLowerCase();
  const responseElement = document.getElementById("response");
  const answerElement = document.getElementById("answer");

  // Проверка, чтобы вопрос не был пустым
  if (!question) {
    alert("Please ask right question.");
    return;
  }

  // Показать сообщение о загрузке
  answerElement.textContent = "Looking books about your question...";
  responseElement.style.display = "block";

  // Определим ключевые слова и ответы
  const keywords = {
    "Assalamu alaykum": "Alaykumu Salam",
    
    // Добавьте до 500 вопросов и ответов, используя дополнительные ключевые слова и ответы
  };

  // Логика ответа на основе ключевых слов
  setTimeout(() => {
    let answer = "AI answer: ";

    // Проверяем наличие ключевых слов в вопросе
    let foundKeyword = false;

    for (let keyword in keywords) {
      if (question.includes(keyword)) {
        answer = keywords[keyword];
        foundKeyword = true;
        break; // Выход из цикла, если нашли ключевое слово
      }
    }

    if (!foundKeyword) {
      answer = "Now I don't have enough knowledge, I'm working on it";
    }

    answerElement.textContent = answer;
  }, 1000);  // Симуляция задержки при ответе ИИ
});