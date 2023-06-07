'use strict'
// Functions

// 1. Создать функцию «переключатель» toggleMe(), которая при вызове чередует возвращаемые булевы значения (true, false).

// let value = true;
// function toggleMe() {
//     return value = !value; 
// }


// console.log(toggleMe());
// console.log(toggleMe());
// console.log(toggleMe());


// 2. Создать функцию counter(), которая способна считать количество своих вызовов (возвращает число). Если передать в эту функцию число как аргумент, то она должна возвращать счетчик начиная с этого числа.
// Пример:

// counter() // 1
// counter() // 2
// counter(6) // 7
// counter() // 8
// counter(11) // 12
// counter() // 13
// counter() // 14

// let startValue = 1;
// function counter () {
//     return startValue ++;
    
// }

// console.log(counter()) 
// console.log(counter()) 
// console.log(counter()) 
// console.log(counter()) 

// 3. Создать функцию classNameEditor(), задача которой "управлять" css-классами. Функция должна принимать строку с названием css-класса и булево значние. Если булево значение true, то функция должна добавлять переданный css-класс, если false, то найти и удалить значение из css-класса. Функция всегда должна возвращать текущее значение css-класса.

// classNameEditor() // '' - вернется пустая строка
// classNameEditor('test', true) // 'test' - добавили класс 'test'
// classNameEditor('test', true) // 'test' - попытались добавить класс 'test' еще раз (не должно быть дублирующих классов)
// classNameEditor('smth', true) // 'test smth' - добавили класс 'smth'
// classNameEditor('test', false) // 'smth' - удалили класс 'test'
// classNameEditor('test', false) // 'smth' - удалили класс 'test'






// Callbacks

// 1. Создать функцию checkLogin, которая принимает 4 параметра. 1 параметр - это логин, введенный пользователем, 2 – правильный логин, 3 – callback, который вызовется если логин верный, 4 – callback, который вызовется если логин ложный.
// Пример вызова:

// checkLogin('user-admin', 'admin', itsOk, itsNotOk);

// function correctLogin () {
//     console.log('correct login');
// }

// function incorrectLogin () {
//     console.log('incorrect login');
// }
// function checkLogin () {
//     const userLogin = prompt('please enter login');
//     const correctLoginToEnter = 'admin';
//     if (userLogin === correctLoginToEnter) {
//         correctLogin();
//     }
//     else {
//         incorrectLogin();
//     }

// }
// checkLogin('userLogin', 'admin', correctLogin, incorrectLogin);




// 2. Написать функцию которая принимает массив строк (имена) и два колбэка. функция добавляет к каждому элементу массива фамилию "Smith" после чего передает получившийся массив в первый колбэк. Когда первый колбэк отработает, возвращеное им значение нужно передать во второй колбэк.
// 1ый колбэк: это функция которая принимает массив строк, добавляет к каждой строке "Mr. " и возвращает получившийся массив. 2ой колбэк: функция которая принимает массив строк и выводит через alert() каждый элемент массива.

// const names = ['Ann', 'Michael', 'Peter', 'Cathrine'];
// function addingSmithToNames (names, firstCallback, secondCallback) {
//     const namesWithSmith = names.map((item) => {
//         return item + ' Smith';
//     });
//     const result = firstCallback(namesWithSmith);
//     const secondResult = secondCallback(result);
//     return secondResult;

    
// };
// function addingMrToNames(names) {
//     return names.map((item) => {
//         return 'Mr '+ item;
//     });
    
// }


// function alertingNames (names) {
//     names.forEach((item) => alert(item));
// }


// addingSmithToNames(names, addingMrToNames, alertingNames)


// Arrays

// 1. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, которая вернет массив только из тех чисел, которые повторялись в исходном.

// const arr = [1,1,1,4,4,5,1,6,6,74,74,74,3];

// function findDuplicates(arr) {
//   const duplicates = arr.filter((number, index) => {
//     return arr.indexOf(number) !== index;
//   });
//   return new Set(duplicates);
// }
// const result = findDuplicates(arr)
// console.log(result);


// 2. Cоздать случайный двумерный массив (вложенные массивы разной длины) из 8 элементов. Обработать массив reduce() и вернуть тот массив сумма элементов которого наибольшая.

// const arr = [[2, 4, 6, 8], [9, 10, 11, 12]];

  
// const largestArr = arr.reduce((currentArr, maxArr) => {
//     const sumOfArr = currentArr.reduce((sum, num) => sum + num, 0);
//     const maxSum = maxArr.reduce((sum, num) => sum + num, 0);
  
//     return sumOfArr > maxSum ? currentArr : maxArr;
//   });
  
//   console.log(largestArr);


// 3. Дан случайный массив чисел. С помощью метода .filter() отфильтруйте массив так, чтобы в новый массив вошли только четные двухзначные числа из исходного.

// const arr = [8, 53, 9, 62, 7, 12, 31]

// const result = arr.filter((number) => {
//     return (number > 10 && number % 2 === 0)
// })
// console.log(result)