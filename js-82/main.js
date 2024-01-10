// const users = ['Bob', 'Alex', 'John', 'Mickey', 'Mika']

// function checkArray(array, item) {

//   for(let i = 0; i<array.length; i++) {
//     if(array[i]===item){
//       return 'Yes, copy find'
//     }

//   }
//   return 'No, not find'

// }

// console.log(checkArray(users,'Mika'))

// ======================== Homeworks

// Первое задание
// function nameArg(name) {
//   console.log(`Hello ${name}!`)
// }

// nameArg('Aldazhar')

// Второе задание
// const numbers = [1, 11, 55, 4, 3, 31, 16, 3, 2];

// function checkNum(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 10) {
//       console.log(array[i]);
//     }
//   }
//   return 'No numbers >10'
// }

// checkNum(numbers);

// Третье задание

function calculator(num1,num2,action) {
  result = 0
  if(action==='minus'){
    result =num1-num2
  }else if(action==='plus'){
    result =num1+num2
  }else if(action==='divide'){
    result =num1/num2
  }else if(action==='multiply'){
    result =num1*num2
  }
  return result
}


console.log(calculator(2,3,'minus'))