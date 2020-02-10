var rate = Number(prompt('Enter student`s rate:'));
if(rate > 0 && rate < 19){
    alert('Оценка "F"');
}else if(rate > 20 && rate < 39){
    alert('Оценка "E"');
}else if(rate > 40 && rate < 59){
    alert('Оценка "D"');
}else if(rate > 60 && rate < 74){
    alert('Оценка "C"');
}else if(rate > 75 && rate < 89){
    alert('Оценка "B"');
}else if(rate > 90 && rate < 100){
    alert('Оценка "A"');
};