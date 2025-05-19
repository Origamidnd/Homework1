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
    


//   Задание 1

function findSmallNum(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
}
}

findSmallNum(8, 4)

// Задание 2

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}

checkEvenOrOdd(4)


// Задание 3

function squareNum(number) {
  const square = number * number;
  console.log(`Квадрат числа ${number} равен ${square}`);
}

squareNum(5);

// Задание 4

function checkUserAge() {
  const ageString = prompt("Сколько вам лет?");

  if (ageString === null) {
    alert("Ввод был отменен.");
    return;
  }

  const age = parseInt(ageString);

  if (age < 0) {
    alert('Вы ввели неправильное значение');
  } 

  else if (age >= 0 && age <= 12) {
    alert('Привет, друг!');
  } 

  else if (age >= 13) {
    alert('Добро пожаловать!');
  } 

  else {
    alert('Вы ввели неправильное значение'); 
  }
}


checkUserAge(); 

// Задание 5    

function multiplyIfNumbers(param1, param2) {
  const num1 = Number(param1);
  const num2 = Number(param2);

  if (isNaN(num1) || isNaN(num2)) {
    return 'Одно или оба значения не являются числом';
  } else {
    return num1 * num2; [[1]]
  }
}

multiplyIfNumbers(3, 4);

// Задание 6

function numberCube() {
  const userInput = prompt("Пожалуйста, введите число:");

  const number = Number(userInput); 

  if (isNaN(number)) {
    return 'Переданный параметр не является числом';
  } else {
    const cubedNum = number * number * number;
    return `${number} в кубе равняется ${cubedNum}`;
  }
}

numberCube();

// Задание 7

function createCircle(radius) {
  const circle = {
    radius: radius,
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  return circle;
}

createCircle();
  

