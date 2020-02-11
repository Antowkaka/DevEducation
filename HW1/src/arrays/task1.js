"use strict";
let arr = [5, 9, 7, 3, 4, 7, 2, 9, 5, 6, 3, 6];
for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            arr[i] = arr[j];
        }
    };
};
console.log('First elem in arr is min:', arr[0]);