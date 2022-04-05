// let test = 1234;

// console.log(`log: ${test}`);

// function log() {
//   console.log(`log: ${test}`);
// }

// function wrapper() {
//   let test = 4321;
//   // console.log(`wrapper: ${test}`);

//   function log() {
//     console.log(test);
//   }

//   log();
// }

// // log();
// // wrapper();

// ЗАМЫКАНИЕ
// function makeCounter() {
//   let i = 0; //переменная в замыкании;

//   function increment() {
//     i++;
//     return i;
//   }
//   function decrement() {
//     i--;
//     return i;
//   }
//   function getCounter(){
//     return i;
//   }

//   return {
//     increment: increment,
//     decrement: decrement,
//     getCounter:getCounter,
//   };
// }

// const obj = makeCounter();
// ???????????????????????????????
// function makeAdder(x) {
//   let result = x;
//   function adder(y) {
//     result += y;

//     return result;
//   }
//   return adder;
// }

const makeAdder = (x) => (y) => (x += y);

const add = makeAdder(10);
