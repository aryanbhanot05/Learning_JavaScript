// const product = {
//     title: "Parker Jotter Standard CT Ball Pen (Black)",
//     brand: "Parker",
//     rating: 4.5,
//     deal: "Deal of the Day",
//     price: 270
// }

// console.log(product.brand)
// console.log(product["rating"])

// const profile = {
//     username: "Aryan Bhanot",
//     nop: 5,
//     nof: 200,
//     following: 800,
//     occupation: "Software Engineer",
//     desc: "Python, Java, HTML, CSS, JavaScript, MySQL, Photoshop, Stock Market"
// }

// Here is a code for faulty calculator
// let num1 = prompt("Enter the first number: ");
// let num2 = prompt("Enter the second number: ");
// let operator = prompt("Enter the operation you want to perform: ");
// let calculation = {
//     "+" : "-",
//     "-" : "+",
//     "/" : "*",
//     "*" : "/"
// }
// const a = Math.random();
// if (a < 0.1) {
//     operator == calculation[operator];
// }
// alert(`${num1} ${operator} ${num2} = ${eval(`${num1}${operator}${num2}`)}`);

// Here is the code for business name generator
let a = {
    1 : "Crazy",
    2 : "Amazing",
    3 : "Fire"
};
let b = {
    1 : "Engine",
    2 : "Foods",
    3 : "Garments"
};
let c = {
    1 : "Bros",
    2 : "Limited",
    3 : "Hub"
};
function generate() {
    let random = Math.floor(Math.random() * 3) + 1 ;
    console.log(random);
    let x = a[random];
    let y = b[random];
    let z = c[random];
    return `${x} ${y} ${z}`
}
console.log(generate);