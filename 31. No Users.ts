
// Array of usernames
const usernames : string[] = ["Admin"];

// Check if the list is empty
if (usernames.length === 0){
    console.log('We need to find some users!');
} else {
    // Loop through the array and print greetings
    for (const username of usernames){
        if (username.toLowerCase() === "admin"){
            console.log("Hello admin, would you like to see a status report?");;
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}