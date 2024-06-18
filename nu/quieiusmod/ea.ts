// Define a type for a function that takes two numbers and returns their sum
type AddFunction = (a: number, b: number) => number;

// Define an interface for a function that takes two numbers and returns their sum
interface AddInterface {
  (a: number, b: number): number;
}

// Create a function that adds two numbers
const add: AddFunction = (a: number, b: number): number => a + b;

// Create a function that subtracts two numbers
const subtract: AddFunction = (a: number, b: number): number => a - b;

// Create a function that multiplies two numbers
const multiply: AddFunction = (a: number, b: number): number => a * b;

// Create a function that divides two numbers
const divide: AddFunction = (a: number, b: number): number => a / b;

// Use the functions
console.log(add(2, 3)); // Output: 5
console.log(subtract(4, 2)); // Output: 2
console.log(multiply(5, 6)); // Output: 30
console.log(divide(10, 2)); // Output: 5
