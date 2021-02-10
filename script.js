// Task 1
// Создайте блок напишите текст. Добавьте на созданный блок событие dblclick. Сделайте так, чтобы при двойном клике не выделялся текс внутри блока.

document.querySelector('.out1').onmousedown = document.querySelector('.out1').onselectstart = () => {
   return false;
}

// Task 2
// Отключите клик правой кнопкой мыши на документе.

document.querySelector('html').oncontextmenu = () => {
   return false;
}

// Task 3
//Создайте блок. В качестве фона добавьте изображение закрытой папки. Добавьте событие, чтобы при наведении мыши изображение закрытой папки сменялось изображением открытой папки. При уведении мыши с блока - все возвращалось в исходный вид.

document.querySelector('.out2').onmouseenter = () => {
   document.querySelector('.fClose').src = "folder close.png";
}

document.querySelector('.out2').onmouseleave = () => {
   document.querySelector('.fClose').src = "folder.png";
}

// Task 4
// Создайте несколько блоков с разными классами. Добавьте событие, чтобы при наведении мыши блок окрашивался в случайный цвет. Для генерации цвета используйте функцию, которая возращает строку вида rgb(23, 45, 66) со случайными числами.

let b1 = document.querySelector('.out31');
let b2 = document.querySelector('.out32');
let b3 = document.querySelector('.out33');

function randomRGB() {
   return Math.round(Math.random() * 255);
}

function randomColor() {
   return `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
}

b1.onmouseenter = () => {
   b1.style.background = randomColor();
}

b2.onmouseenter = () => {
   b2.style.background = randomColor();
}

b3.onmouseenter = () => {
   b3.style.background = randomColor();
}

// let colorBlock = document.querySelectorAll('.out3');
// for (let i = 0; i < colorBlock.length; i++) {
//    colorBlock[i].onmouseenter = () => {
//       colorBlock[i].style.background = randomColor();
//    }
// }


