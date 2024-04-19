const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

const getUniqueValues = array => [...new Set(array)];

const reverseWords = str => str.split(" ").reverse().join(" ");
const removeDuplicates = array => Array.from(new Set(array));
class MyClass { constructor() { this.property = getRandomString(); } }
// This is a comment
