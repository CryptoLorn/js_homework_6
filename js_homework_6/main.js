/*
//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let str = 'hello world';
console.log(str.length);

let str2 = 'lorem ipsum';
console.log(str2.length);

let str3 = 'javascript is cool';
console.log(str3.length);*/


/*
//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let str = 'hello world';
console.log(str.toUpperCase());

let str1 = 'lorem ipsum';
console.log(str1.toUpperCase());

let str2 = 'javascript is cool';
console.log(str2.toUpperCase());*/


/*
//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str = 'HELLO WORLD';
console.log(str.toLowerCase());

let str1 = 'LOREM IPSUM';
console.log(str1.toLowerCase());

let str2 = 'JAVASCRIPT IS COOL';
console.log(str2.toLowerCase());*/


/*
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());*/


//--------------------------------------------------------------------


/*
//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str = 'Каждый охотник желает знать';

let stringToArray = (str) => {
return str.split(' ');
}

let arr = stringToArray(str);
document.writeln(arr);*/


//--------------------------------------------------------------------


/*
//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

let str = 'Каждый охотник желает знать';

let delete_characters = (str, length) => {
    return str.substr(0, length);
}

document.writeln(delete_characters(str, 7));*/


//--------------------------------------------------------------------


/*
//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str = "HTML JavaScript PHP";

let insert_dash = (str) => {
    let split = str.split(' ');
    let join = split.join('-');
    let toUpper = join.toUpperCase();
    return toUpper;
}

document.writeln(insert_dash(str));*/


//--------------------------------------------------------------------

/*
//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let str = 'hello world!';

let toUpperCase = (str) => {
    let strUpper =  str.charAt(0).toUpperCase() + str.slice(1);
    return strUpper;
}

console.log(toUpperCase(str));*/


//--------------------------------------------------------------------

/*
//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}

console.log(capitalize('there are many variations of passages of Lorem Ipsum available'));*/