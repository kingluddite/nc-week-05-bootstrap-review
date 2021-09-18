
const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
}

const movieStar = getFullName('Matt', 'Damon');
console.log(movieStar);
// const myFunction = (name) => {
//     console.log(name);
//     // console.log(this);
//     // this.innerHTML=Date();
//     // console.log('hello from function');
// }
// const buttonEl = document.querySelector('button');
// // const mainEl = document.querySelector('main');
// // console.log(buttonEl);

// buttonEl.addEventListener('click', () => clickHandler('phil'));
// // function greeting(name ='noname', color = 'red') {
// //     console.log(`Hello ${name}. My favorite color is ${color}`); // local scope
// // }

// greeting();
// greeting('Ben', 'yellow');
// greeting('Erika', 'red');
// greeting('Alexis', 'orange');
// greeting('Marina', 'teal');

// function getPizzaCost(size, nToppings) {
//     let cost = 10; // base cost for a small pizza;
//     if (size === 'medium') {
//         cost += 4;
//     } else if (size === 'large') {
//         cost += 8;
//     }
//     cost += nToppings;
//     return cost;
//     // console.log('The cost of this pizza is: ', cost);
// }
// const myPizza = getPizzaCost('small', 5);
// const footerEl = document.querySelector('.my-special-footer');
// footerEl.textContent = myPizza;

// Example 1
// We can reassign with `var` just like we can with `let`

// let firstName = 'John';

// firstName = 'Jill';
// console.log(firstName);

// Difference between `var` and `const` and `let` and why `const` and `let` should be preferred

// Example 2
// `var` lets us recreate a variable that was already created (declared)
// `const` or `let` wouldn't let us declare a variable already declared
// This is a big problem with `var` and if we use `var` is could cause problems for our code
// `const` and `let` help prevent us from overiding a variable we already declared

// let firstName = 'John';

// firstName = 'Jill';

// var firstName = 'Tom';
// console.log(firstName);

// Example 3
// Another con of `var`
//  `var` is "function scoped" not "block scoped"
// "if" statements don't create a new scope when working with `var`

// function myName() {
//   var firstName = 'Jen';
// }

// console.log(firstName); // Jen

// Example 4
// Using var `if` statements are "function scoped" so we have access to firstName
// But if we used `let` or `const` they are "block scoped" and `firstName` would not be accessible in the global scope because it is INSIDE the block

// if (true) {
//   let firstName = 'Jen';
// }

// console.log(firstName); // error ---> firstName is not defined

// Notes about above code:
// "Block scope" gives you more flexibility than "function scope"
// I can create local variables in "if" statements using `const` and `let`
// If I used `var` those variables would be exposed OUTSIDE the "if" statement which could cause conflict problems - "don't pollute your scope!"

// Example 5
// var is "function scoped"
// function test() {
//   var firstName = 'John';
// }

// console.log(firstName); // will give you an error that firstName is not defined because it is "function scoped"

// Example 6
// Other problem is accessing a variable before it is declared
// JavaScript will implicitly set declared variables and unassigned to `undefined`
// This is true for `var`, `let` and `const`

// var myName;
// let myOtherName;
// // let myOtherOtherName;
// // console.log(myName);
// console.log(myOtherName);
// // console.log(myOtherOtherName);

// Note that `const` is commented out because you will get an error if you do not assign a value to `const` variables

// Example 7 - Hoisting
// Try to access a variable before it is defined
// console.log(myName);
// let myName;

// You will get `undefined`
// This is because when you declare a variable with `var` it's declaration gets "hoisted" to the top of the scope
// **remember** It is only the declaration of the variable that gets hoisted

// Example 8
// if we assign a value to our var variable, we'll still get undefined
// console.log(myName); // still undefined
// var myName = 'Joe';
// console.log(myName);

// Example 9
// The above because of hoisting really looks like this:

// var myName;
// console.log(myName);
// myName = 'Joe';

// Example 10
// One more weird example of `var`

// firstName = 'Joe';
// console.log(firstName); // Joe
// var firstName;

// We get `Joe` from our log because once again the `var` declaration gets **hoisted** to the top of the program

// But if you do this:
// console.log(myName);
// let myName;

// You will get a `ReferenceError: Cannot access 'myName' before initialization`

// Takeaway: Bottom line
// `let` and `const` should be used
// `var` sh
// ould not be used as `let` and `const` are better tools that help our code be cleaner and have less strange old school strange JavaScript bugs
// Go back to slides to review takeaways

// greeting(); // global scope

