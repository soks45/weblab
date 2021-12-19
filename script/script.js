function abc()
{
    let form = document.querySelector('form');
    let StudentName = form.elements['Name1'].value;
    if (StudentName == "")
        return;
    let GroupNumber = form.elements['RadioGroup'].value;
    let StudentList =  document.querySelector("#"+GroupNumber);
    let NewStudent = document.createElement("li");
    if (GroupNumber == 'Group1')
      NewStudent.className = 'tasks__item';
    else 
      NewStudent.className = 'tasks__item2';
    NewStudent.draggable = true;
    NewStudent.innerHTML = StudentName;
    StudentList.insertAdjacentElement("beforeend", NewStudent);
    form.elements['Name1'].value = "";
}

const tasksListElement = document.querySelector('.tasks__list');
const taskElements = tasksListElement.querySelectorAll('.tasks__item');

for (const task of taskElements) {
  task.draggable = true;
}

tasksListElement.addEventListener(`dragstart`, (evt) => {
  evt.target.classList.add(`selected`);
});

tasksListElement.addEventListener(`dragend`, (evt) => {
  evt.target.classList.remove(`selected`);
});



tasksListElement.addEventListener(`dragover`, (evt) => {
  evt.preventDefault();
  
  const activeElement = tasksListElement.querySelector(`.selected`);
  const currentElement = evt.target;
  const isMoveable = activeElement !== currentElement &&
    currentElement.classList.contains(`tasks__item`);
    
  if (!isMoveable) {
    return;
  }
  
  const nextElement = (currentElement === activeElement.nextElementSibling) ?
		currentElement.nextElementSibling :
		currentElement;
		
	tasksListElement.insertBefore(activeElement, nextElement);
});


const tasksListElement2 = document.querySelector('.tasks__list2');
const taskElements2 = tasksListElement.querySelectorAll('.tasks__item2');

for (const task2 of taskElements2) {
  task2.draggable = true;
}

tasksListElement2.addEventListener(`dragstart`, (evt) => {
  evt.target.classList.add(`selected`);
});

tasksListElement2.addEventListener(`dragend`, (evt) => {
  evt.target.classList.remove(`selected`);
});

tasksListElement2.addEventListener(`dragover`, (evt) => {
  evt.preventDefault();
  
  const activeElement = tasksListElement2.querySelector(`.selected`);
  const currentElement = evt.target;
  const isMoveable = activeElement !== currentElement &&
    currentElement.classList.contains(`tasks__item2`);
    
  if (!isMoveable) {
    return;
  }
  
  const nextElement = (currentElement === activeElement.nextElementSibling) ?
		currentElement.nextElementSibling :
		currentElement;
		
	tasksListElement2.insertBefore(activeElement, nextElement);
});

let scrollUpElement = document.querySelector('.reference');
scrollUpElement.addEventListener(onscroll, (evt) => {
  evt.target.display = flex;
});

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
button1.addEventListener("click", ShowSchedule);
button2.addEventListener("click", ShowBill);
button3.addEventListener("click", ShowAttendance);

function ShowSchedule()
{
  alert('Функия ещё не добавлена');
}

function ShowBill()
{
  alert('Функия ещё не добавлена');
}

function ShowAttendance()
{
  alert('Функия ещё не добавлена');
}

let buttonTEMA = document.getElementById('buttonTEMAid');
buttonTEMA.addEventListener("click", ChangeTheme);

function ChangeTheme()
{
  document.body.style.background = "#d2d43e";
}

document.addEventListener("DOMContentLoaded", ready);
function ready() {
  alert('Сайт успешно загружен');
}

window.onbeforeunload = function() {
  return "Есть несохранённые изменения. Всё равно уходим?";
};

var img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

img.src = 'https://i1.sndcdn.com/artworks-5eeV9wyr8YyTsfBy-htejWQ-t500x500.jpg';
var CanvasXSize = 1600;
var CanvasYSize = 500;
var speed = 1; //lower is faster
var scale = 1;
var y = -4.5; //vertical offset

// Main program

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width*scale;
    imgH = img.height*scale;
    if (imgW > CanvasXSize) { x = CanvasXSize-imgW; } // image larger than canvas
    if (imgW > CanvasXSize) { clearX = imgW; } // image larger than canvas
    else { clearX = CanvasXSize; }
    if (imgH > CanvasYSize) { clearY = imgH; } // image larger than canvas
    else { clearY = CanvasYSize; }
    //Get Canvas Element
    ctx = document.getElementById('canvas').getContext('2d');
    //Set Refresh Rate
    return setInterval(draw, speed);
}

function draw() {
    //Clear Canvas
    ctx.clearRect(0,0,clearX,clearY);
    //If image is <= Canvas Size
    if (imgW <= CanvasXSize) {
        //reset, start from beginning
        if (x > (CanvasXSize)) { x = 0; }
        //draw aditional image
        if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); }
    }
    //If image is > Canvas Size
    else {
        //reset, start from beginning
        if (x > (CanvasXSize)) { x = CanvasXSize-imgW; }
        //draw aditional image
        if (x > (CanvasXSize-imgW)) { ctx.drawImage(img,x-imgW+1,y,imgW,imgH); }
    }
    //draw image
    ctx.drawImage(img,x,y,imgW,imgH);
    //amount to move
    x += dx;
}