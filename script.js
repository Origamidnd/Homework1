// Задание 1

function massageHello() {
    for(let i = 1; i <= 2; i++) {
        console.log("Привет");
    }
}


massageHello()

// Задание 2

function fiveNums() {
    for(let i = 1; i <= 5; i++) {
        console.log(i);
    } 
}

fiveNums()

// Задание 3

function sevenNums() {
    for(let i = 7; i <= 22; i++) {
        console.log(i)
    }
}

sevenNums()

// Задание 4

const obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400 
};

for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}


// Задание 5

function oneThousand() {
    let n = 1000;
    let num = 0;

    while (n >= 50) {
        n = n / 2;
        num++
    }

    console.log("Результат: " + n);
    console.log("Количество итераций: " + num);
}

oneThousand()

// Задание 6

    function reportFriday () {
        let firstFriday = 5;
        for(let day = firstFriday; day <= 31; day += 7) {
            console.log(`Сегодня пятница, ${day} число. Необходимо подготовить отчет`)
        }
    }
        reportFriday()
    


// Дополнительные задания
// Задание 1

function hundredSeven() {
    let k = 100;
    let iterations = 0;

    while (k >= 0) {
        k = k - 7;
        iterations++
    }

    console.log("Результат: " + k);
    console.log("Количество итераций: " + iterations);
}
    hundredSeven();

// Задание 2

function mounthsNumber() {
    const months = ["Январь",
                    "Февраль",
                    "Март",
                    "Апрель",
                    "Май",
                    "Июнь",
                    "Июль",
                    "Август",
                    "Сентябрь",
                    "Октябрь",
                    "Ноябрь",
                    "Декабрь"];

    for (let i = 0; i < months.length; i++) {
        console.log(`${i + 1}. ${months[i]}`);
    }
}
mounthsNumber()


// Задание 3

checkOS();

function bookInfo() {
    const book = {
        "Название": "Ведьмак (серия книг)",
        "Автор": "Анджей Сапковский",
        "Год издания": 1986,
        "Жанр": "фэнтези, приключения"
    };

    for (let key in book) { 
        console.log(`${key}: ${book[key]}`);
    }
}

bookInfo()


// Здание 4
function minNumber() {
    const numbers = [37, 82, 14, 59, 63, 8, 41, 95, 22, 71];

    console.log("Массив случайных чисел:", numbers);
    
    let min = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    
    console.log("Минимальное число в массиве:", min);
}

minNumber()