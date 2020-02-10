var first = Number(prompt('Enter first number:'));
var second = Number(prompt('Enter second number:'));
var third = Number(prompt('Enter third number:'));
var numb_arr = [first, second, third];
var result = 0;
for(var i = 0; i < 3; i++){
    if(numb_arr[i] > 0){
        result += numb_arr[i];
    };
};
alert(result);