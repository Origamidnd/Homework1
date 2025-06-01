// Основное задание

function startGameOne() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let guessedCorrectly = false;

    alert("Привет! Начинаем игру 'Угадай Число'.\nЯ загадал число от 1 до 100.");

    while (!guessedCorrectly) {
        let userInput = prompt("Введи свое предположение (число от 1 до 100). Если хочешь сдаться, нажми 'Отмена'.");
         if (userInput === null) {
            alert('Игра окончена.');
            return;
        }

         const userGuess = parseInt(userInput);

         if (isNaN(userGuess)) {
            alert('Ошибка! Введи целое число.');
            continue;
        }

        if (userGuess < 1 || userGuess > 100) {
            alert("Число должно быть в диапазоне от 1 до 100. Попробуй еще раз.");
            continue;
        }

        if (userGuess < randomNumber) {
            alert(`Загаданное число БОЛЬШЕ, чем ${userGuess}. Попробуй еще!`);
        } else if (userGuess > randomNumber) {
            alert(`Загаданное число МЕНЬШЕ, чем ${userGuess}. Попробуй еще!`);
        } else {
                  guessedCorrectly = true;
        alert(`🎉 Поздравляю! Ты угадал! Загаданное число было ${randomNumber}.`);
        }
      }
    }


function mathGame() {
  const operators = ['+', '-', '*', '/'];
  const operator = operators[Math.floor(Math.random() * 4)];

  let num1, num2, correctAnswer;

  switch (operator) {
    case '+':
      num1 = Math.floor(Math.random() * 50) + 1;
      num2 = Math.floor(Math.random() * 50) + 1;
      correctAnswer = num1 + num2;
      break;
    
    case '-':
      num1 = Math.floor(Math.random() * 50) + 1;
      num2 = Math.floor(Math.random() * num1) + 1;
      correctAnswer = num1 - num2;
      break;

    case '*':
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      correctAnswer = num1 * num2;
      break;
    
    case '/':
      num2 = Math.floor(Math.random() * 10) + 1;
      correctAnswer = Math.floor(Math.random() * 10) + 1;
      num1 = num2 * correctAnswer;
      break;
  }


  let symbol = operator;
  if (operator === '*') symbol = '×';
  if (operator === '/') symbol = '÷';

  const userInput = prompt(`Решите: ${num1} ${symbol} ${num2} = ?`);
  
  const userAnswer = parseFloat(userInput);
  
  if (isNaN(userAnswer)) {
    alert("Пожалуйста, введите число!");
  } else if (Math.abs(userAnswer - correctAnswer) < 0.001) {
    alert("Правильно!");
  } else {
    alert(`Неправильно! Правильный ответ: ${correctAnswer}`);
  }
}


function reverseTextGame() {
    const userText = prompt("Введите текст для переворота:");
    
    if (userText === null || userText.trim() === '') {
        alert("Вы не ввели текст!");
        return;
    }
    
    const reversedText = userText.split('').reverse().join('');
    
    alert(`Перевернутый текст: ${reversedText}`);
  
}


const quiz = [
    {
        question: "Какой цвет неба?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function startQuiz() {
    let correctAnswers = 0;
    
    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        
        let questionText = currentQuestion.question + "\n\n";
        for (let j = 0; j < currentQuestion.options.length; j++) {
            questionText += currentQuestion.options[j] + "\n";
        }
        questionText += "\nВведите номер ответа (1, 2 или 3):";
        
        let userAnswer = prompt(questionText);
        
        if (userAnswer === null) {
            alert("Викторина прервана!");
            return;
        }
        
        userAnswer = parseInt(userAnswer);
        
        if (userAnswer === currentQuestion.correctAnswer) {
            correctAnswers++;
        }
    }
    
    alert(`Викторина завершена!\nВы ответили правильно на ${correctAnswers} из ${quiz.length} вопросов.`);
}
