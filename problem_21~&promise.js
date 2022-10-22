console.log("21");
// How Much is True?
/*Argument Type	Result
undefined	    false
null	        false
boolean	        same as input
number	        +0, -0, NaN -> false, otherwise -> true
string	        empty string -> false, otherwise -> true
object[],{}	    true
Because Array is type of object, the fact that an empty Array is conversed to true is correct.
But in Loose Equality, [] == false is true.*/

function TrueNumber(arrlist){
    if (arrlist === []) return 0
    let countTrue = 0;
    arrlist.forEach((element) => {
        if (element) countTrue++
    })
    return countTrue
}
let arr = [true, false, true]
console.log(TrueNumber(arr));
// ____________________________________________

console.log("22");
// Right Shift by Division return integer
// 80 >> 3 = floor(80/2^3) = floor(80/8) = 10
/*Math.pow(x, y) = x square y (Math.pow(2,3) ➡ 8
  Math.round(0.9) ➡ 1 return nearest integer.
  Math.floor(5.95)  ➡ 5 (-2.5) ➡-3 returns the largest integer less than or equal to a given number.
*/
function MyNumber(x, y) {
    y = Math.pow(2, y)
    MyNumber = x / y
    let result = Math.floor(MyNumber)
    return result
}
console.log(MyNumber(-512, 10));
// ______________________________________________

console.log("23");
// get number of digits in number but not use string
// const num2 = 524;
// console.log(num1.toString().length); // 3
function getNumberLength(num) {
    return Math.ceil(Math.log10(num + 1));
}
console.log(getNumberLength(23452));
// _________________________________________

console.log("24");

// https://edabit.com/challenge/9KEKJG5PZTFmG3Zau
// addName({}, "Brutus", 300) ➞ { Brutus: 300 }
/* Computed Property
const myCar = new Object();
myCar.make = 'ferary'; ➡ {make : 'ferary'}
const myCar = {}
myCar['make'] = 'ferary' ➡ {make : 'ferary'}
*/
function addObj(obj, key , value){
    let object_ = obj
    object_[key] = value
    return object_
}
console.log(addObj({}, "Caligula", 440));
// __________________________________________________

console.log("25");
// Function Factory
function sum(x){
    return function(y){
        return x + y
    }
}
console.log(sum(5)(10));
// ___________________________________

console.log("26");
// callback function

const  takeOrder = (customer,callback) => {
    console.log(`take order ${customer}`);
    //order rcv krsi tai ami callbackr maddome arkjoner nikot pathalam
    callback(customer) //customer_1
}
const processOrder = (customer,callback) => {
    console.log('processing your order...');
    // ok fine rcv your order but need 3sec time 
    setTimeout(() => {
        console.log('cooking complete!');
        console.log(`order process for ${customer}`);
        // now ready so pass callback er mpddome your ordr
        callback(customer)
    }, 1000)
}

const completeOrder = (customer) => {
    console.log(`complete order for ${customer}`);
}
//nicher etak bole callback hale 
//but jodi callback hale onnek golo thake tokhon call bojte sommossa tai 
// ai problm dor korar jonno #Promise use korte pari
takeOrder('customer_1',(customer) => { // callback rcv customer_1
    processOrder(customer, (customer) => { //callback rcv customer_1
        completeOrder(customer) //pass customer_1
    })
})
// ____________________________________________

console.log(27);
//Promise Asynchronous

const status = true;
//promise definition
const definePromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if (status) {
            resolve('task Complite')
        } else {
            reject('failed')
        }
    }, 1500)
})
//promise call
definePromise
    .then(function(res) {
        console.log(res);
    })
    .catch(function(res) {
        console.log(res);
    })

// promise➡(async➡await)or .then
const paymentSuccess = true;
const mark = 80

function enroll() {
    console.log('course enrollment is the progress...');
    const promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            if (paymentSuccess) {
                resolve() // akhne ami kichu pass korbona cause result pawer jonno next a kichu fulfile korte hobe
            } else {
                reject('payment failed')
            }
        }, 2000)
    })
    return promise //promise vahire patahte hobe
}
function progress() {
    console.log('progress your certificate...');
    const promise = new Promise(function(resolve, reject) {
        if (mark >= 70) {
            resolve() //akhaneo same
        } else {
            reject('you are failed')
        }
    }, 2000)
    return promise
}
function getCertificate() {
    console.log('ready your certificate');
    const promise = new Promise(function(resolve) {//akhne reject no need cause akhne fail hobe na
            resolve('got your certificate congratulation!')
    })
    // oprer promise jodi sodo resolve pai tahole short curt kora jai
    //const promise = Promise.resolve('got your certificate congratulation!')
    return promise
}
// akhan theke promise call
// promise call 2way kora jai (promise().then) use kre r (async await) use kre
// ................................................................
// promise call by .then
enroll() 
    .then(progress) //check payment then next progress
    .then(getCertificate) //check pass fail then certificate
    .then(function(response) { //now got certificate
        console.log(response);
    })
    .catch(function(error) { //any error all access
        console.log(error);
    })

//akhne ⇧.then k aro easy korar jonno async await use korbo
// promise call async await
async function course() {
    try {
        await enroll()
        await progress()
        const message = await getCertificate()
        //getCertificate theke je message ta paisi ta print korbo
        console.log(message); 
    } catch(err) {
        console.log(err);
    }
}
course()
// return same result useing promise().then & async await
// ................................................................
