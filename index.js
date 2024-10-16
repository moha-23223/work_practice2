let product1 = prompt("Enter the product name:"); // Название товара 1
let price1 = parseFloat(prompt(`Enter the price of ${product1}:`)); // Стоимость товара 1
let count1 = parseInt(prompt(`Enter the quantity of ${product1}:`)); // Количество товара 1

console.log(product1, price1 * count1); // Вывод в консоль

let product2 = prompt("Enter the product name:"); // Название товара 2
let price2 = parseFloat(prompt(`Enter the price of ${product2}:`)); // Стоимость товара 2
let count2 = parseInt(prompt(`Enter the quantity of ${product2}:`)); // Количество товара 2

console.log(product2, price2 * count2); // Вывод в консоль

let product3 = prompt("Enter the product name:"); // Название товара 3
let price3 = parseFloat(prompt(`Enter the price of ${product3}:`)); // Стоимость товара 3
let count3 = parseInt(prompt(`Enter the quantity of ${product3}:`)); // Количество товара 3

console.log(product3, price3 * count3); // Вывод в консоль

// Calculate total amount
let totalAmount = (price1 * count1) + (price2 * count2) + (price3 * count3);

// Display total amount in the console
console.log(`Total purchase amount: ${totalAmount}`);