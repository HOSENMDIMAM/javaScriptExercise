
console.log("solve_11");
// returns the highest digit in that number.
// highestDigit(379) ➞ 9

function highestDigit(num) {
    num = num.toString().split('')
    console.log(num);
    let order= num.sort()
    console.log("order "+order);

    let concate = Math.max(...order)
    console.log(concate);


}
let number = 5980
highestDigit(number)
// ______________________________________
console.log("solve_12");
// How Many Vowels?
// Create a function that takes a string and returns 
// the number (count) of vowels contained within it.

let countVowels = 0
function strignText(params){
    params = params.split('')
    console.log(params);
    for (let i = 0; i < params.length; i++){
        // params.includes(vowels[i]) also posible using this but requried vowel arr list
        if (params[i] == "a" || params[i] == "e" || params[i] == "i" || params[i] == "o" || params[i] == "u"){
            countVowels++
        }
    }
}
strignText("Celebration")
console.log(countVowels);
// ________________________________________
console.log("solve_13");
// Recursion to Repeat a String n Number of Times
// https://edabit.com/challenge/MjqneMZ7aZa8AxXZG

let repeatStr = []
function myStr(str, num) {
    for (let i = 0 ; i < num; i++){
        repeatStr.push(str)
    }
    console.log(repeatStr.join(''));
}

myStr("Str" , 3)
// ____________________________________________

console.log("solve_13");
// Find the Largest Numbers in a Group of Arrays
// https://edabit.com/challenge/h7LTMAFeNz79rXB2Y
console.log([6,9,10,5,4,3].sort((x,y)=> x-y)); //[3, 4, 5, 6, 9, 10]

let largestArr = []
function findLargestNun(arr){
    for (let i = 0; i < arr.length; i++){
            let largList = arr[i].sort((x,y) => x-y); 
            largestArr.push(largList[largList.length-1]);
    }
}
let arrList = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]
findLargestNun(arrList)
console.log(largestArr);
// _________________________________________________
console.log("solve_14");
// Return the Index of the First Vowel
// firstVowel("hello") ➞ 1

function fristVowel(str){
    // let index = str.search(/[aeiou]/g) also possible 
    let vowel = ["a","e","i","o","u","A","E","I","O","U"]
    str = str.split('')
    let index = 0
    let flag = true
    for (let i = 0; i<str.length; i++){
        for (let j = 0; j<vowel.length; j++){
            if (str[i] === vowel[j] && flag) {
                index = i
                flag = false
            }
        }
    }
    console.log(index);
}
let Characters = "mango"
fristVowel(Characters)
// __________________________________________

console.log("solve_15");
// Sort Numbers in Descending Order
// sortDescending(73065) ➞ 76530

function DescendingOrder(num){
    //Array.from(String(num))//[7,3,0,6,5] //The Array.from() static method creates a new, 
    let arr = String(num).split('').sort().reverse()
    let result = arr.join('')
    return result //akhane arr deyar that means result er man ta pathano   
}
let numb  = 73065
console.log(DescendingOrder(numb))
// ___________________________________________________
console.log("solve_15");
// Transform into an Array with No Duplicates
// [1, 3, 3, 5, 5, 5] ➞ [1, 3, 5]

function setArr(arr){
    // 3 ways to remove duplicates in an Array in Javascript

    // 1st use Set()
    // Using Set(), an instance of unique values will be created,
    // will delete the duplicates.
    let uniqeChr_1 = [...new Set(arr)]
    console.log(uniqeChr_1);// [1, 3, 5]

    // 2nd filter() filer method returns a new array 
    let uniqeChr_2 = arr.filter((element, index) => {
        return arr.indexOf(element) === index
        /* algorithon indexof()
       element ➡ arr.indexOf(element) === index
             1 ➡ 0 === 0
             3 ➡ 1 === 1
             3 ➡ 1 === 2
             5 ➡ 3 === 3
             5 ➡ 3 === 4    */
    })
    console.log(uniqeChr_2)

    // 3rd  Using the includes() and forEach() methods
    let uniqeChr_3 = []
    arr.forEach(element => {
        if (!uniqeChr_3.includes(element)){ //true false
            uniqeChr_3.push(element)
        }
        return
    });
    return uniqeChr_3
}
let duplicateArr = [1, 3, 3, 5, 5]
console.log(setArr(duplicateArr));
// ________________________________________________

console.log("solve_16");
// Reverse the Case
// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
//console.log(char.toUpperCase());➞ convert to UpperCase
//console.log(char === char.toUpperCase()); ➞ return true/false

function reverseCase(str){
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++){ 
        if (arr[i].toUpperCase() === arr[i]){
            arr[i] = arr[i].toLowerCase()
        } else {
            arr[i] = arr[i].toUpperCase()
        }
    }
    arr = arr.join('')
    return arr
}
console.log(reverseCase("Happy BirthDay"))
// ____________________________________________

console.log("solve_17");
// Maximum Possible Total
// https://edabit.com/challenge/Wg3pBiH8HQggcfaTg
/* array.sort((a, b) => a - b);
   Ascending [0, 1,1,1,1,3,10,10,10,10]
   array.sort((a, b) => b - a);
   Descending  [10,10,10,10,3,1,1,1,1,0]*/

function maxNum(arr){
    arr = arr.sort((x,y) => x - y).reverse()
    let SumofMax5Numbers = 0
    for (let i = 0; i < 5; i++){
        SumofMax5Numbers = SumofMax5Numbers + arr[i]
    }
    return SumofMax5Numbers
}
let MaxNumResult = maxNum
console.log(MaxNumResult([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]));
// ___________________________________________________________

console.log("solve_18")
// Most Left Digit
// leftDigit("TrAdE2W1n95!") ➞ 2

/*  isNaN(); return true/false
    isNaN("hello") ➡　true
    isNaN(1) ➡　false
    isNaN("1") ➡　false
*/ 
function leftDigit(str){
    str = str.split('')
    let found = str.find((element) => !isNaN(element))
    return found
    // result also same 👇
    // let getDigit = 0, flag = true
    // str.find((x) => {
    //     if (!isNaN(x) && flag){
    //         getDigit = x
    //         flag = false
    //     }
    // })
    // return getDigit
}
console.log(leftDigit("TrAdE2W1n95!"));
// _____________________________________________

console.log("solve_19")
// Spelling it Out
// spelling("bee") ➞ ["b", "be", "bee"]

function SpellingOut(str){
    let foundstr = ''
    str = str.split('')
    // No need create new Array cause map() return new array
    let result = str.map(element => foundstr = foundstr + element)

    // ⇩ also same result
    // let result = str.map((element) => {
     //    when use {} then must be use return
    //     return (foundstr = foundstr + element)
    // })

    // ⇩ also same result
    // let result = [], 
    // for(let i = 0; i < str.length; i++){
    //     foundstr = foundstr + str[i]
    //     result.push(foundstr)
    // }
    return result
}
console.log(SpellingOut("happy"));
// _____________________________________________

console.log("solve_20")
// Summing a Slice
// sliceSum([1, 3, 2], 2) ➞ 4

function summingSlice(arr, n){
    let SumOfArr = 0
    if (n === 0){
        return SumOfArr
    } else {
        for (let i = 0; i < arr.length; i++){
            if ((i+1) <= n){
                SumOfArr = SumOfArr + arr[i]
            }
        }
    }
    return SumOfArr
}
console.log(summingSlice([3, 6, 2], ));