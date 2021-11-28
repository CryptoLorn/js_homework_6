/*
//- Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

let name = (n1) => {
    return n1.replaceAll('..', ' ').replaceAll('---', ' ').replaceAll('__', ' ');
}

console.log(name(n1));*/

//-------------------------------------------------------------------------

/*
//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let arr = [];

let randomArr = (arr) => {
    for (let i = 0; i < 5; i++){
        arr.push(Math.round(Math.random()*100));
    }
    return arr;
}

console.log(randomArr(arr));*/

//-------------------------------------------------------------------------

/*
//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let arr = [];

let randomArr = (arr) => {
    for (let i = 0; i < 5; i++){
        arr.push(Math.round(Math.random()*100));
    }
    return arr;
}

let sortArr = randomArr(arr);
console.log(sortArr.sort((a,b) => a - b));*/

//-------------------------------------------------------------------------

/*
//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let arr = [];

let randomArr = (arr) => {
    for (let i = 0; i < 5; i++){
        arr.push(Math.round(Math.random()*100));
    }
    return arr;
}

let filterArr = randomArr(arr);

console.log(filterArr.filter(value => value % 2 === 0));*/

//-------------------------------------------------------------------------

/*
//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arr = [];

let randomArr = (arr) => {
    for (let i = 0; i < 5; i++){
        arr.push(Math.round(Math.random()*100));
    }
    return arr;
}

let mapArr = randomArr(arr);

console.log(mapArr.map(value => value.toString()));*/

//-------------------------------------------------------------------------

/*
//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//let nums = [11,21,3];
//sortNums('ascending') // [3,11,21]
//sortNums('descending') // [21,11,3]

let arr = [];

let randomArr = (arr) => {
    for (let i = 0; i < 5; i++){
        arr.push(Math.round(Math.random()*100));
    }
    return arr;
}

randomArr(arr);

let sortNums = (arr, direction) => {
    if (direction === 'ascending'){
        return arr.sort((a, b) => a - b);
    }
    else if (direction === 'descending'){
        return arr.sort((a, b) => b - a);
    }
}

console.log(sortNums(arr, 'descending'));*/

//-------------------------------------------------------------------------

/*
//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

//  -- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));*/