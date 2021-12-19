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
