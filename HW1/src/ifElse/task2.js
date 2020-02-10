var x = Number(prompt('Enter "x":'));
var y = Number(prompt('Enter "y":'));

if(x > 0 && y > 0){
    alert('Первая четверть');
}else if(x < 0 && y > 0){
    alert('Вторая четверть'); 
}else if(x > 0 && y < 0){
    alert('Третья четверть'); 
}else if(x < 0 && y < 0){
    alert('Четвёртая четверть'); 
};