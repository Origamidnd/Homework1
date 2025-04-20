// Задание 1

function checkPassword(password) {
    const truePassword = 'Пароль';
    let userPassword = prompt('Введите пароль');
    if (userPassword === truePassword) {
        alert('Пароль введен верно');
    } else {
        alert('Пароль введен неверно');
    }
}

checkPassword();

// Задание 2

function checkNum(c) {
    if (c > 0 && c < 10) {
        alert('Верно');
    } else {
        alert('Неверно');
    }
}

checkNum(6);
checkNum(0);
checkNum(10);
checkNum(-3);
checkNum(2);

// Задание 3

function checkNums(d, e) {
    if (d > 100 || e > 100) {
        alert('Верно');
    } else {
        alert('Неверно');
    }
}

checkNums(66, 666);


// Задание 4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(+a + +b);


// Задание 5

function checkMonth(month = prompt('Введите номер месяца')) {
    switch (month) {
        case '1':
        case '2':
        case '12':
            alert('Зима');
            break;
        case '3':
        case '4':
        case '5':
            alert('Весна');
            break;
        case '6':
        case '7':
        case '8':
            alert('Лето');
            break;
        case '9':
        case '10':
        case '11':
            alert('Осень');
            break;
    }
}

checkMonth();


// Дополнительные задания
// Задание 1

function checkEvenOdd(userNum = prompt('Пожалуйста, введите любое число')) {
    let num = Number(userNum);
    if (isNaN(num)) {
        alert('Вы ввели не число, введите число');
        return;
    }
    if (num % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
}

checkEvenOdd();

// Задание 2

function checkOS(clientOS) {
    const androidOS = 1;
    if (clientOS === androidOS) {
        console.log('Установите версию приложения для Android по ссылке');
    } else {
        console.log('Установите версию приложения для iOS по ссылке');
    }
}


// Задание 3

checkOS();

function checkDeviceYear(clientOS, clientDeviceYear) {
    const iOSOS = 0;
    const deviceYear = 2015;

    if (clientDeviceYear < deviceYear && clientOS === iOSOS) {
        console.log("Установите облегченную версию приложения для iOS по ссылке");
    } else if (clientDeviceYear < deviceYear) {
        console.log("Установите облегченную версию приложения для Android по ссылке");
    } else if (clientOS === iOSOS) {
        console.log("Установите версию приложения для iOS по ссылке");
    } else {
        console.log("Установите версию приложения для Android по ссылке");
    }
}
checkDeviceYear();