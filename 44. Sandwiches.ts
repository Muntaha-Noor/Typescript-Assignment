
// Define a function for making sandwiches
function makeSandwich(...items: string[]): void {
    console.log("Sandwich with:", items.join(", "));
}

// Call the function with different numbers of arguments
makeSandwich("Ham", "Cheese");
makeSandwich("Turkey", "Lettuce", "Tomato");
makeSandwich("Peanut Butter", "Jelly");