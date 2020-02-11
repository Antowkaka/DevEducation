"use strict";
var numb = 2345;
var numbToStr = numb.toString();
var res = 0;
for(var i = 0; i < numbToStr.length; i++){
    res += Number(numbToStr[i]);
};
console.log(res);
