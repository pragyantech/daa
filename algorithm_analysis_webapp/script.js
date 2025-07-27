let score = 0;
let totalQuestions = 3;
let answered = 0;

function checkAnswer(button, isCorrect) {
  const question = button.parentElement;
  const buttons = question.querySelectorAll('button');
  buttons.forEach(btn => btn.disabled = true);

  if (isCorrect) {
    button.style.backgroundColor = '#4CAF50';
    score++;
  } else {
    button.style.backgroundColor = '#f44336';
  }

  answered++;
  if (answered === totalQuestions) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `You scored ${score} out of ${totalQuestions}`;
    resultDiv.style.color = score >= 2 ? 'green' : 'red';
  }
}