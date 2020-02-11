"use strict";
var numb_arr = [6, 4, 3];
var result = 0;
for(var i = 0; i < 3; i++){
    if(numb_arr[i] > 0){
        result += numb_arr[i];
    };
};
console.log(result);