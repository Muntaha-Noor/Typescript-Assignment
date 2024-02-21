
// Stor three favorite pizza names in an array
const favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Use a for loop to print each pizza name
for (const pizzaName of favoritePizzas){
    console.log(pizzaName);
}

// Modify the for loop to print a sentence using the name of the pizza
for (const pizzaName of favoritePizzas) {
    console.log(`I like ${pizzaName} pizza.`);
}

// Add a line outside the loop expressing your love for pizza
console.log("I really love pizza!");