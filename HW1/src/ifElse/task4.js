"use strict";
var max = function(a, b, c){
    var devision = a*b*c;
    var summ = a+b+c;
    if(devision > summ){
        return devision;
    }else if(devision < summ){
        return summ;
    }
}

var a = 0;
var b = 7;
var c = 8;
console.log(max(a, b, c));