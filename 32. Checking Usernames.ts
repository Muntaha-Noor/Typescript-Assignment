

// Exercise no 32.

// Make a list of current users
const current_users: string[] = ["Kulsoom", "Nazia", "Musfirah", "Warda", "Muntaha"];

// Make a list of new users 
const new_users: string[] = ["Anus", "Salman", "Abdul", "Qadir"];

for (const new_user of new_users){
    const isUsernameTaken = current_users.some((user) => user.toLowerCase() === new_user.toLowerCase());

    if (isUsernameTaken){
        console.log(`Username '${new_user}' is not available. Please choose a different one.` );
    } else {
        console.log(`Username '${new_user}' is available.`)
    }
}