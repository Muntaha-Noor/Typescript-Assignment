
let Guest_List :string[] = ['Muntaha Noor', 'Warda Noor', 'Musfirah Noor'];

for(let i=0; i<Guest_List.length; i++){
     
    console.log('Dear Miss.' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

let absent_Guest :string = 'Warda Noor';

let new_Guest :string = 'Kulsoom Noor';

Guest_List[1] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){
     
    console.log('Dear ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You\n\n')
}

console.log(`Miss.${absent_Guest} is not coming to the party.\n`)

console.log("Great news! We found a bigger dinner table.\n");

Guest_List.unshift("Nazia Noor");

Guest_List.splice(Math.floor(Guest_List.length / 2), 0, "Noor Jahan");

Guest_List.push("Anus Noor");

for(let i=0; i<Guest_List.length; i++ ){

    console.log(`Dear ${Guest_List[i]} ,\nyou are invited to dinner. Please Join us !\n`);
}

console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people.\n");

while(Guest_List.length > 2){

    let removedGuest = Guest_List.pop();

    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.\n`)
}

for(let guest of Guest_List){
    console.log(`Dear ${guest}, you are still invited to dinner. Please jion us!\n`);
}

Guest_List.pop();
Guest_List.pop();

console.log("Final guest list:", Guest_List);