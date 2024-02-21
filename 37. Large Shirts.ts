
// Define the make_shirt function with default values

function maka_shirt (size: string = "Large", message: string = "I love typescript"): void{
    console.log(`shirt size: ${size}, Message: ${message}`);
}

// Create a large shirt with the default message

maka_shirt ();

// Create a medium shirt with the default message

maka_shirt("Medium");


// Create a small shirt with a custom message

maka_shirt("Small", "Typescript is fun!");


