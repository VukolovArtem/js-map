"use strict";

/*
  Есть див с конпками
  по нажатию на кнопку поменять цвет / цвет фона дива на тот
  который на кнопке указан
  информация про цвет кнопки хранится в data-* аттрибуте
*/

// const div = document.getElementById('root');

// function listener(e) {
//   const {
//     target: {
//       dataset: { color },
//       parentElement,
//     },
//   } = e;
//   console.dir(e.target);
//   parentElement.style.backgroundColor = color;
// }

// const btns = document.querySelectorAll('button');

// btns.forEach((btn) => {
//   btn.addEventListener('click', listener);
// });

// function listener(e) {}

// const div = document.querySelector('#root');

// div.addEventListener('click', (e) => {
//   const {
//     currentTarget,
//     target: {
//       dataset: { color },
//     },
//   } = e;
//   if (color) {
//     currentTarget.style.backgroundColor = color;
//   }
// });

// const form  = document.getElementById('todo-form');
// const todoList = document.getElementById('todo-list');

// form.addEventListener('submit', (e) =>{
//   e.preventDefault();
//   const {
//     target:{ elements },
//     target,
//   } = e;

//   const taskText = elements.task.value;

//   todoState.push(taskText);

//   const li = document.createElement('li');
//   li.textContent = taskText;
//   todoList.append(li);
//   target.reset();
// });



// Вывести от 1..n

// function intervalCounter(){
//   console.time('interval timer');
//   let i =1;

//   const id = setInterval(() => {
//     console.log(i++);
//     if (i>20){
//       clearInterval(id);
//       console.timeEnd('interval timer');
//     }
//   }, 100);
// }

// intervalCounter();

// function timeoutCounter(i =0){  
//   console.log(i++);
//   if (i<=20){
//     setTimeout(()=>{
//       timeoutCounter(i);
//     }, 100);
//   }else{
//     console.timeEnd('timeout timer');
//   }
// }


// console.time('timeout timer');
// timeoutCounter();