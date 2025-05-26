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


//   Задание 1
function firstTask() {
  const numbers = [1, 5, 4, 10, 0, 3];
  for (const element of numbers) {
    console.log(element);
    if (element === 10) {
      break;
    }
  }
}

firstTask()

// Задание 2

function secondTask() {
  const array = [1, 5, 4, 10, 0, 3];
  const index = array.indexOf(4);
  console.log(index);
}

secondTask()

// Здание 3

function thirdTask() {
  const array = [1, 3, 5, 10, 20];
  const newArray = array.join(' ');
  console.log(newArray);
}

thirdTask()


// Задание 4

function fourthTask() {
  let array = [];
  for (let i = 0; i < 3; i++) {
    array[i] = [];
    for (let j = 0; j < 3; j++) {
        array[i][j] = 1;
    }
}

console.log(array);
}

fourthTask()

// Задание 5

function fifthTask() {
  let array = [1, 1, 1];
  array.push(2, 2, 2);
  console.log(array);
}

fifthTask()

// Задание 6

function sixthTask() {
const arr = [9, 8, 7, 'a', 6, 5];
arr.sort();

const indexOfA = arr.indexOf('a');
if (indexOfA !== -1) {
  arr.splice(indexOfA, 1);
}

console.log(arr); 
}

sixthTask()

// Задание 7

function seventhTask() {
const numbers = [9, 8, 7, 6, 5];
const userGuess = prompt('Угадайте число из массива');
  if (numbers.includes(Number(userGuess))) {
  alert('Угадал');
} else {
  alert('Не угадал');
}
}
seventhTask()

// Задание 8
function eighthTask() {
  const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');

console.log(reversedStr);
}
eighthTask()

// Задание 9
function ninthTask() {
  const array = [[1, 2, 3,],[4, 5, 6]];
  const newArray = array.flat();
  console.log(newArray);
}
ninthTask()

// Задание 10
function tenthTask() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      console.log(array[i]);
    }
  }
  }
  tenthTask()

  // Задание 11

  function elevenTask(numbers) {
  const squaredNumbers = numbers.map(number => number * number);
  return squaredNumbers;
}

  const numbers = [1, 2, 3, 4, 5];
  const result = elevenTask(numbers);
  console.log(result);


  // Задание 12
  function twelveTask(words) {
     return strArray.map(str => str.length);
}

const words = ["hello", "world", "javascript"];
console.log(twelveTask(words));


// Задание 13
function thirteenTask(numbers) {
  return numbers.filter(number => number < 0);
}

const numbers = [1, -2, 3, -4, 5];
console.log(thirteenTask(numbers));

// Задание 14
function fourteenTask(numbers) {
  const originalArray = [];

for (let i = 0; i < 10; i++) {
  const randomValue = Math.floor(Math.random() * 11);
  originalArray.push(randomValue);
}
const evenArray = originalArray.filter(number => number % 2 === 0);
}

// Задание 15
function fifteenTask(numbers) {
  const randomNumbers = [];

for (let i = 0; i < 6; i++) {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  randomNumbers.push(randomNum);
}
let sum = 0;
for (let i = 0; i < randomNumbers.length; i++) {
  sum += randomNumbers[i];
}
const average = sum / randomNumbers.length;
}
