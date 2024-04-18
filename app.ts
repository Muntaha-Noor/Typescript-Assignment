
// Define a function to make magician great
function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Define a function to show magicians
function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

// Example
const magiciansArray: string[] = ["Merlin", "Houdini", "Gandalf"];
const greatMagicians: string[] = makeGreat(magiciansArray);
showMagicians(greatMagicians);