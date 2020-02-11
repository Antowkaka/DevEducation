"use strict";
var summ = 0;
for(var i = 1; i < 100; i++){
    if(i < 4){
        console.log('True');
    }else if(i % 2 == 0 || i % 3 == 0){
        console.log('False');
    }else{
        console.log('True');
    };
};
