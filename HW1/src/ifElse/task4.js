var max = function(a, b, c){
    var devision = a*b*c;
    var summ = a+b+c;
    if(devision > summ){
        return devision;
    }else if(devision < summ){
        return summ;
    }
}

var a = Number(prompt('Enter "a":'));
var b = Number(prompt('Enter "b":'));
var c = Number(prompt('Enter "c":'));
alert(max(a, b, c));