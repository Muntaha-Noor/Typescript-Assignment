let placesToVisit :string[] = ['Tokyo', 'Sawad', 'New York', 'London', 'UAE'];

console.log("Oringnal Order:", placesToVisit);

console.log("Alphabetical Order",[... placesToVisit].sort());

console.log("Original Order (still):", placesToVisit);

console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

console.log("Original Order (still):", placesToVisit);

placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);

placesToVisit.sort();
console.log("Sorted Alphabetical Order:", placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted Reverse Alphabetical Order:", placesToVisit);