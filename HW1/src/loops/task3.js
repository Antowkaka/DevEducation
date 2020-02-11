"use strict";
var nat_numb = 5;
var i = 0;
//вариант последовательного подбора
while(i < nat_numb){
    if(i * i == nat_numb){
        console.log('Root is ', i);
        break;
    }else if(i * i > nat_numb){
        console.log('Appprox root is', i);
        break;
    };
    i++;
}

//метод бинарного поиска
var value = 120;
var high = value - 1;
var low = 0;
var mid = 0;
console.log('Root(sqrt) is', Math.sqrt(value));
while(low <= high){
    mid = Math.floor((high + low)/2);
    if(mid * mid == value){
        console.log('Root is', mid);
        break;
    }else if(mid * mid == value+1 || mid * mid == value-1){
        console.log('Approx root is', mid);
        break;
    }else if(value > mid * mid){
        low = mid + 1;
    }else{
        high = mid + 1;
    };
        console.log('Loop number:', i, 'mid = ', mid);
    i++;
};    
