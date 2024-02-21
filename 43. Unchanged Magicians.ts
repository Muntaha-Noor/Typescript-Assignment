
function makeGreat(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

const originalMagicians: string[] = ["Merlin", "Houdini", "Gandalf"];

const greatMagicians: string[] = makeGreat([...originalMagicians]);

showMagicians(originalMagicians);

showMagicians(greatMagicians);