
function show_magicians(magicians: string[]): void {
    for(const magician of magicians) {
        console.log(magician);
    }
}

const magicianNames: string[] = ["Merlin", "David copperfield", "Houdini", "Luna"];

show_magicians(magicianNames);