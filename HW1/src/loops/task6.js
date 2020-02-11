"use strict";
var numb = 123;
numb = numb.toString();
var res = [];
for(var i = numb.length-1; i >= 0; i--){
    res += numb[i];
}
console.log(res);
