// jawascrit assignment number 17 ...
// PDF date METHODS.
// question number 1
var date =  new Date() 
console.log(date);


// question number 2

// const months = [
//     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
// ];
// const currentMonthIndex = new Date().getMonth();

// const currentMonth = months[currentMonthIndex];

// console.log(`Current month is ${currentMonth}`);
// alert(`Current month is ${currentMonth}`);


const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const currentmonth = new Date().getMonth();

const correntindex = months[currentmonth]

console.log(`current month : ${correntindex}`);

// question number 3

// const days =['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

// const index = new Date().getDay()

// const finalresult = days[index].substring(2,9)

// console.log(finalresult)


const days = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
];


const currentDayIndex = new Date().getDay();


const currentDay = days[currentDayIndex];

alert(`today is ${currentDay}`);


// question number 4

const  today = new Date().getDay();

if(today === 0 || today === 6){
   alert("its fun day ")
}
else{
    alert("today is not sunday")
}

// question number 5
var ajj
  = new Date().getDate();

if(ajj > 16){
  alert("first fifteen days of the month")
}

else{
    alert("last days")
}

// skip.

// question number 7

const now = new Date()

const hour = now.getHours()

if(hour < 12){
  console.log("its AM")
}
else{
  console.log("its PM")

}

// question number 8

// const laterdate = new Date(2020,11,31)

// console.log(laterdate)

// alternative way

const det = new Date();

det.setFullYear(2020)
det.setMonth(11)
det.setDate(31)
console.log( `latter date :${det}`);

// question number .10


const reference_date = new Date("january,1,2015")
const  specific_date = new Date("december,5,2015")
const finresult = Math.floor((specific_date - reference_date)/1000)




console.log(`refference date is ${reference_date} and seconda had passed is ${finresult}`);

console.log(finresult);

// question number 11

const abs = new Date()

console.log(`current date ${abs}`)

const correntdt = new Date()

console.log(`current date is ${correntdt}`)

const houre = correntdt.getHours()

correntdt.setHours(houre  - 1)

console.log (` 1 hour ago it was ${correntdt}`)

// const crntdate = new Date()

// console.log(crntdate);

// const correntD = new Date()

// const hourse = correntD.getHours()

// crntdate.setHours(hourse - 1)

// console.log(crntdate)

// question number 13.

const userinput = +prompt("enter your age")

const currentyear = new Date().getFullYear()

const answer =  currentyear - userinput;

alert(`your birth year is ${answer}`)


