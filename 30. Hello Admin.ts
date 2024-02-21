
const usernames :string[] = ["admin", "Eric", "Alice", "Bob", "admin"];

for (const username of usernames) {
    if (username.toLowerCase() === "admin"){
        console.log("Hello admin, would you like to see a status report?\n");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.\n`);
    }
}