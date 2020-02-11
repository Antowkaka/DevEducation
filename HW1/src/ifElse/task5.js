"use strict";
var rate = 56;
if(rate > 0 && rate < 19){
    console.log('Оценка "F"');
}else if(rate > 20 && rate < 39){
    console.log('Оценка "E"');
}else if(rate > 40 && rate < 59){
    console.log('Оценка "D"');
}else if(rate > 60 && rate < 74){
    console.log('Оценка "C"');
}else if(rate > 75 && rate < 89){
    console.log('Оценка "B"');
}else if(rate > 90 && rate < 100){
    console.log('Оценка "A"');
};