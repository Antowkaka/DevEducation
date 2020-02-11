"use strict";
let arr = [1, 4, 5, 6, 8, 4, 6, 2, 7, 5, 7, 9];
for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            arr[i] = arr[j];
        }
    };
};
console.log('Last elem in arr is max:', arr[arr.length-1]);