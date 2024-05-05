

let name = "Adam"; 
let  age = 24;
let grade = "A"; 
let attendance = true

console.log(name)
console.log(age)
console.log(grade)
console.log(attendance)

let a = 9
let b = 3

console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Quotient:", a / b);

a = 33
b += 8

console.log("Updated num1:", a);
console.log("Updated num2:", b);

console.log("Is num1 equal to num2?", a == b);
console.log("Is num1 greater than num2?", a >= b);
console.log("Is num1 not equal to num2?", a != b);


let isPositive = a >= 0 && b >= 0;
let isEven = a % 2 == 0 || b % 2 == 0;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);
