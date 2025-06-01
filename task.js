
// Задание 1
function isPalindrome(str) {
let upperStr = str.toUpperCase();
console.log(upperStr);
}


// Задание 2

function filterByPrefix(array, prefix) {
    return array.filter(str => str.toLowerCase().startsWith(prefix.toLowerCase()));
}


// Задание 3

function roundNumber(number) {
    const results = {
        original: number,
        down: Math.floor(number),
        up: Math.ceil(number), 
        nearest: Math.round(number)
    };
    
    console.log(`До меньшего целого: ${results.down}`);
    console.log(`До большего целого: ${results.up}`);
    console.log(`До ближайшего целого: ${results.nearest}`);
}

roundNumber(32.58884);

// Задание 4

function findMinMax() {
    const numbers = [52, 53, 49, 77, 21, 32];
    
    const minimum = Math.min(...numbers);
    const maximum = Math.max(...numbers);
    
    console.log('Исходные числа:', numbers);
    console.log('Минимальное значение:', minimum);
    console.log('Максимальное значение:', maximum);
}

findMinMax();


// задание 5

function getRandomNumber() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    console.log('Случайное число от 1 до 10:', randomNum);
}

getRandomNumber();

// Задание 6

function generateRandomArray(number) {
    const arrayLength = Math.floor(number / 2);
    
    const randomArray = [];
    
    for (let i = 0; i < arrayLength; i++) {
        const randomNum = Math.floor(Math.random() * (number + 1));
        randomArray.push(randomNum);
    }
    
    console.log(`Число: ${number}`);
    console.log(`Длина массива: ${arrayLength}`);
    console.log(`Массив случайных чисел от 0 до ${number}:`, randomArray);
    
    return randomArray;
}


// задание 7

function getRandom(min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
    console.log(`Случайное число в диапазоне от ${min} до ${max}: ${randomNum}`);
    return randomNum;
}


// Задание 8

function showCurrentDate() {
    const currentDate = new Date();
    console.log('Текущая дата:', currentDate);
}


// Задание 9

function showDateAfter73Days() {
    const currentDate = new Date();
    
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 73);
    
    console.log('Текущая дата:', currentDate.toLocaleDateString());
    console.log('Дата через 73 дня:', futureDate.toLocaleDateString());
}


// задание 10

function dateAfter73Days() {
    const currentDate = new Date();
    
    // Создаем новую дату на основе текущей
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 73);
    
    console.log('Текущая дата:', currentDate.toLocaleDateString());
    console.log('Дата через 73 дня:', futureDate.toLocaleDateString());
}
