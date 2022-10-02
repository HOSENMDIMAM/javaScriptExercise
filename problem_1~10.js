console.log("solve_1");
// Create a function that calculates
// the number of different squares in an n * n square grid. 

let count = 0;

function Number(n){
    for (let i = n; i > 0; i-- ){
        count = i * i + count
    }
}
Number(5)
console.log(count);

console.log("solve_2");
/*Given two numbers, return true if the sum of both numbers
 is less than 100. Otherwise return false.*/

 function Number_2(a, b) {
    let count_2 = a + b
    if (count_2 > 100) {
        return true
    } else {
        return false
    }
 }
 console.log(Number_2(50,80));
//-------------------------------------------------------------
 console.log("solve_3");
//  largest swap to disit number
//  problem : https://edabit.com/challenge/hD3euqPHM82Cbr7R8


function SwapNumber (num){
//   console.log(num.toString());
  let swap = num.toString()
  console.log(swap +"="+ typeof swap );

  let toarr = swap.split("")
  console.log(toarr +"="+ typeof toarr);

  let torev = toarr.reverse()
  console.log(torev +"="+ typeof torev );

  let tojoin = torev.join("")
  console.log(tojoin +"="+ typeof tojoin );

  let NNum = parseInt(tojoin)
  console.log(NNum +"="+ typeof NNum );

  if (num < NNum) {
    return true
  } else {
    return false
  }
}
console.log(SwapNumber(43));

function SwapNumber_2(num) {
   num = num.toString().split('').reverse().join('');
   parseInt(num)
   return 72 +" TO "+num
}
console.log(SwapNumber_2(72));
// _____________________________________________

console.log("solve_4");
// Sorting
// problem : https://edabit.com/challenge/nuXdWHAoHv9y38sn7

function sorted(param) {
  return param = param.sort((a,b) => a.price - b.price)
}
let food = [
  {name : "pizza", price : 500},
  {name : "drinks", price : 100}
]
console.log(sorted(food));
// ____________________________________________________:

console.log("solve_5");
// Create a function that takes two arrays and insert the second array in the middle of the first array.
// https://edabit.com/challenge/7ysTEDruHz2prcJQ9
function spradArray(arr_1, arr_2){
  let newArr = [...arr_1, ...arr_2]
  console.log(newArr);
}
const Array1 = [4,5]
const Array2 = [6,7,1,2,8,9]

spradArray(Array1, Array2)
// ______________________________________________:

console.log("solve_6");
// Find the Amount of Potatoes

let countp = 0;

function potatoes(param){
  let params = param.split('potato')
  console.log(params);
  for (let i = 0; i < params.length; i++){
    if (params[i] == ""){
      countp = countp + 1
    } else{
      console.log();
    }
  }
  console.log(countp);
  
}
let findpotato = "potatopotato"
console.log(potatoes(findpotato));
// ____________________________________________:
console.log("solve_7");

// https://edabit.com/challenge/xtHTBXjumRg5AhsT5
// If the two arrays are the same, return false & bith array are same length
// if frist array index item geter than second array index item then return true wthire wise false

let flag = true
function arrSuperior(arr1, arr2){
  /*JavaScript provides a function JSON.stringify() method in order 
  to convert an object or array into a JSON string. By converting into
  JSON strings,we can directly check if the strings are equal or not.*/
  if (JSON.stringify(arr1)===JSON.stringify(arr2)){
    flag = false
    // return
  } else {
    for (let i = 0; i < arr1.length; i ++) {
      if (arr1[i] > arr2[i] || arr1[i] === arr2[i]){
        flag = true
      } else {
          flag = false
      }
    }
  }
}
let arr_1 = [1,2,3]
let arr_2 = [1,2,4]
// remind next time ([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false
// console.log(arrSuperior(arr_1, arr_2))
arrSuperior(arr_1, arr_2)
console.log(flag);
// ____________________________________________________________________:

console.log("solve_8");
// https://edabit.com/challenge/kbFhwaDyrd79JrgeB
/*Create a function that takes two strings as arguments and returns the number of times 
the first string (the single character) is found in the second string.*/

function charString(s1,s2){
  let strCount = 0
  console.log(s2 +"= "+"2a");
  for(let i = 0; i < s2.split("").length; i++){
    if (s2[i] === s1){
      strCount++
    }
  }
  console.log(strCount);
}
let str_1 = "a"
let str_2 = "Bangladesh"

charString(str_1, str_2)
// _____________________________________________________

console.log("solve_9");
// Repeating string
// https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB
// doubleChar("String") ➞ "SSttrriinngg"

let doubleStr = ""

function repetStr(str) {
  // str = str.split('')
  str.split('').map((ele, index) => {
    doubleStr = doubleStr + str[index] + str[index]
  })
}
repetStr("Hello World!")
console.log(doubleStr);
// __________________________________________________________

console.log("solve_10");
// Sum of Cubes
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
let sumNum = 0
function cubeNum(num){
  num.map((item, index) => {
    sumNum = Math.pow(item, 3) + sumNum
  })
}
let arrNum = [1,5,9]
cubeNum(arrNum)
console.log("sumNum = "+sumNum);