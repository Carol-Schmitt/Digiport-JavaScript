 
// Objects are a way to store data in key-value pairs.
// Example: bird = {
//   name: "Sparrow",
//   age: 1,
//   sings: true,
// };

// Exercises:
// 1. Simple object
// Make an object 'cat' with 'name', 'color', and 'age'.
// Show the values in the console.

cat = {
    name: "Marrie", 
    color: "white",
    age: 2,
}

console.log("The cat name is " + cat.name + ", its color is " + cat.color + ", and it have " + cat.age + "ages")

// 2. Add and change
// Add 'toy' to the cat object.
// Change the 'age' to another number.

cat = {
    toy: "ball",
    age: 3,
}

console.log(`The Cats favorite toy is a ${cat.toy}, and her age now is ${cat.age} years old`)

// 3. Object with method
// Make an object 'dog' with 'name', 'breed',
// and a method 'bark()' that prints "Woof!".

dog = {
    name: "Bluey",
    breed: "Blue Heeler",
    bark: function(){
        console.log("Woof")
    }
}
 
dog.bark()



// 4. Array of objects
// Make an array 'market' with 3 products.
// Each product has 'name' and 'price'.
// Print the name of each product along with its price.

i = 0,

market = [
    {name: "rice", price: 1.99},
    {name: "beans", price: 2.99},
    {name: "meat", price: 5.99}
]

for (product of market){
    console.log(`${product.name}, ${product.price}`)
}

// 5. Object inside object
// Make an object 'movie' with 'title' and 'director'.
// Inside it, add 'review' with 'rating' and 'comment'.
// Print the rating and comment.


movie = {
 name: "titulo1", 
 director: "Fulano"

}

movie = {
    review: "good",
    rate: "righ",
    comment: "good film"
}

//console.log(movie.name, movie.director, movie.review, movie.rate, movie.comment)

// 6. For...in to sum values
// We have an object 'scores' with points from 3 players.
// Use a for...in loop to add all the points together
// and print the total.
let scores = {
  Name: "Alice", points: 5,
  Name: "Bob", points: 7,
  Name: "Charlie", points: 4,
};
let total = 0;
 
for(player in scores){
    total += scores[player];
}

console.log(total)