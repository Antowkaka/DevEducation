//Data types
///////////////
console.log('Task 1');
let myNumber = 123;
let string = 'Hello World';
let bool = false;
let myNull = null;
let mySymbol = Symbol();
let myUndef = undefined;

console.log('Numb:', myNumber, 'String:', string,
            'Bool:', bool, 'Null:', myNull, 'Symbol:', mySymbol, 'Undef:', myUndef);

//operator 'typeof' and method .isArray()
//////////////
console.log('Task 2');
let func = function (){};
let arr = [];
let newMyNull = null;
console.log('typeof func:', typeof(func), 'typeof arr:', typeof(arr),
            'typeof null:', typeof(newMyNull));

//get NaN
///////////////
console.log('Task 3');
console.log('zero division:', 0/0);
console.log('infinity division:', Infinity/Infinity);
console.log('negative root:', Math.sqrt(-10));

//data type Number and method .toFixed()
///////////////
console.log('Task 4');
let numb = 4000;
let newNumb = Number(4000);
console.log('typeof numb:', numb);
console.log('typeof newNumb:', newNumb);
console.log('toFixed() is working:', numb.toFixed(4));

//arithmetic operators
console.log('Task 5');
let count = 10;
let variable = 100;
console.log('count++:', count++);
console.log('count:', count);
console.log('++count:', ++count);
console.log('variable*=4 :', variable*=4);
console.log('variable+= 10 :', variable+= 10);
console.log('10 > 5 :', 10 > 5);
console.log('10 < 5:', 10 < 5);
console.log('10 >= 10 :', 10 >= 10);
console.log('8 <= 10 :', 8 <= 10);
console.log('10 === 10 :', 10 === 10);
console.log('10 !== 10 :', 10 !== 10);
console.log('10 == "10" :', 10 == "10");
console.log('10 === "10" :', 10 === "10");

//data type String
//////////////////
console.log('Task 6');
let str = "Hello World";
console.log('\'ATБ\' store');
console.log(str.slice(0,5), '\n', str.slice(6,11));
console.log(str.slice(0,5), '\t', str.slice(6,11));

//data type Boolean
//////////////////
console.log('Task 7');
let theNewNumb = 10;
let prevStr = 'my Str';
let newStr = prevStr || 'default';
console.log('numb && 5 + numb :', theNewNumb && 5+theNewNumb);
console.log('newStr is ', newStr);