// 2)

// EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.
// Example output: “The name Thomas is longer than John by 2 characters”

let name1 = 'Junior';
let name2 = 'Jorge';

console.log(`The name ${name1} is longer than ${name2} by ${name1.length - name2.length}`);