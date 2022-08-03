// let's create a basic person object

let person ={
    firstname: "Rochelle",
    lastname: "Maxwell",
    age: 32,
    favorites: {
        movies:["Shrek","Thor","Moribus","Wolverine","The Notebook","Cinderalla"],
        artist:['Nas','Prince','Beetles','Michael Jackson',"Will Downing"]
    },
    greeting:() =>{
        console.log("Hello world!")
    }
}
// Now let's practice accessing key/value pairs within our object
// We can use dot or bracket notation
console.log(person.firstname);
console.log(person["firstname"]);

// How do I access the movie of Thor in my person object--------------
console.log(person.favorites.movies[1]);
// lets invoke the greeting function
person.greeting();

// let's practice some destructuring
// let {lastname} = person;
// console.log(lastname);
// console.log(person.lastname);

// let {greeting} = person;
// greeting();

// let {firstname,lastname,age} = person;
// firstname = "Queen";
// // console.log(firstname, lastname,age);
// console.log(firstname,person.firstname)

let {firstname, lastname,age:yearsOfWisdom} =person
console.log(yearsOfWisdom)

// Review of looping objects using for ... in loops
for (const property in person){
    console.log(`The property of ${property} has a value of:${person[property]}`)
}
// Adding and deleting properties-----------------
// add
person.job ="Instructor";
console.log(person.job);
// delete

delete person.job
console.log(person)

// CLASSES-----------------------------------------
// Let's make a basic dog class
class Dog{
    constructor(name,breed,age){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.isCute = true
    }
    greeting(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old. My breed is ${this.breed}.`);
    }
}
const Bella = new Dog("Bella", "Yorkiepoo", 1);
console.log (Bella);
Bella.greeting();

// Now let's tackle class extension using puppies----------
class Puppy extends Dog{
    constructor(name,breed,age,isTeething){
        super(name,breed,age);

        this.isTeething = isTeething;
    }
}
const Zuri = new Puppy("Zuri", "Pomperian",1,true);
console.log(Zuri);