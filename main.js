/* //AGE
let age = +prompt('Введите возраст');
if (age > 0 && age <= 18) {
    alert('Вы еще молоды, Вам нужно учиться');
    // console.log('Вы еще молоды, Вам нужно учиться');
}
else if (age > 18 && age <= 50) {
    alert('Вам нужно работать');
}
else if (age > 50 && age <= 59) {
    alert('Вам скоро на пенсию');
}
else if (age > 50 && age <= 100) {
    alert
        ('Вы пенсионер');
}
else{
    alert('Вы померли')
} */

//TIME

// let time = +prompt('Введите время в цифрах');
// switch (time) {
//     case 0:
//     alert('00:00 часов ночи');
//     break
//     case 1:
//     case 2:  
//     case 3: 
//     alert( time + 'часа ночи');
//     break;
//     case 4:
//     alert('4 часа утра');
//     break;
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     alert( time + 'часов утра');
//     break;
//     case 11:
//     alert('11 часов утра');
//     break;
//     case 12:
//     alert('12 часов дня');
//     break;
//     case 13:
//     alert('1 час дня');
//     break;
//     case 14:
//     alert('2 часа дня');
//     break;
//     case 15:
//     alert('3 часа дня');
//     break;
//     case 16:
//     alert('4 часа дня');
//     break;
//     case 17:
//     alert('5 часов дня');
//     break;
//     case 18:
//     alert('6 часов вечера');
//     break;
//     case 19:
//     alert('7 часов вечера');
//     break;
//     case 20:
//     alert('8 часов вечера');
//     break;
//     case 21:
//     alert('9 часов вечера');
//     break;
//     case 22:
//     alert('10 часов ночи');
//     break;
//     case 23:
//     alert('11 часов ночи');
//     break;
// } 

//AVERAGE NUMBER
let num1 = +prompt('Введите 1 числo');
let num2 = +prompt('Введите 2 числo');
let num3 = +prompt('Введите 3 числo');
if (num1 < num2 && num1 > num3 || num1 > num2 && num1 < num3 ){
    alert(num1);
}
else if (num2 < num1 && num2 > num3 || num2 > num1 && num2 < num3){
    alert(num2);
}
else if (num3 < num1 && num3 > num2 || num3 > num1 && num3 < num2){
    alert(num3)
}