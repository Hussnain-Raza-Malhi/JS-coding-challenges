//Output question

console.log('Hello world!')
console.log('My Name is Hussnain Raza Malhi')
console.log('I am Learning JavaScript via Full Stack Bootcamp of DiaaTech')
console.log('I will become the best developer by hard work.')
console.log('I am making commitment to do code with consistency.')


//variable questions

let name = 'Hussnain Raza Malhi';
let age = 21;
console.log(name + " " +
    age);



let name1 = 'My Name is Hussnain Raza Malhi.';
let learn = 'I am Learning JavaScript via Full Stack Bootcamp of DiaaTech.';
let developer = 'I will become the best developer by hard work.';
let consistent = 'I am making commitment to do code with consistency';
console.log(name1 + learn + developer + consistent)



let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
let multiply = num1 * num2;
let division = num1 / num2;
let minus = num1 - num2;
console.log('addition is  ' + sum);
console.log('minus is  ' + minus);
console.log('multiplication is  ' + multiply);
console.log('division is  ' + division);



//BMI

let johnHeight = 1.7;
let johnMass = 60;
let markHeight = 2;
let markMass = 75;
let johnBmi = johnMass / (johnHeight * johnHeight);
let markBmi = markMass / (markHeight * markHeight);
console.log("BMI of John  " + johnBmi);
console.log("BMI of Mark  " + markBmi);
let markHigherBmi = false;
console.log(markHigherBmi);




//If-Else Problems

if (markBmi > johnBmi) {
    console.log(`Marks's BMI ${markBmi} is higher than john's BMI ${johnBmi} `)
} else {
    console.log(`John's BMI ${johnBmi} is higher than mark's BMI ${markBmi} `)
}




let userAge = prompt("Please enter your age ");
if (userAge >= 18) {
    console.log("User is old enough to cast a vote.")
} else {
    console.log("User is not old enough to cast a vote.")
}




let studentGrade = prompt("Please Enter Your Grade : ")
if (studentGrade == "A" || studentGrade == "a") {
    console.log("Excellent!");
} else if (studentGrade == "B" || studentGrade == "b") {
    console.log("Great!");
} else if (studentGrade == "C" || studentGrade == "c") {
    console.log("Good!");
} else if (studentGrade == "D" || studentGrade == "d") {
    console.log("Improve");
} else if (studentGrade == "F" || studentGrade == "f") {
    console.log("Fail!!");
} else {
    console.log("Invalid Input!")
}


let age1 = prompt("Enter Your Age : ");
if (age1 > 0 && age <= 2) {
    console.log("Baby");
} else if (age1 >= 3 && age <= 5) {
    console.log("toddler");
} else if (age1 >= 6 && age <= 12) {
    console.log("child");
} else if (age1 >= 13 && age <= 18) {
    console.log("Teenager");
} else if (age1 >= 19) {
    console.log("Adult");
} else {
    console.log("Invalid Input!")
}



let number = prompt("Please Enter a Number : ")
if (number == 0) {
    console.log(" number is Zero!!")

} else if (number < 0) {
    console.log(" number is Negative")
} else {
    console.log("number is Positive")
}