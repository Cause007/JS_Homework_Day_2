//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let i = 0; i < Object.keys(person3).length; i++) {
    if(Array.isArray(Object.values(person3)[i])){
        console.log(Object.values(person3)[i])
    } else {
    console.log(`${Object.keys(person3)[i]}: ${Object.values(person3)[i]}`)
    }
}
/* Using some online searches, I was trying to get all of 
the embedded objects elements to print out individually 
(oberwise:Chocolate, dunkin:vanilla, etc.) 
but couldn't figure it out.
*/


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        return `This is ${this.name}, who is presently ${this.age} years old.`
    }
    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age
    this.addAge = (ageIncrease) => {
        return this.age += ageIncrease
    } 
}

let john = new Person('John',32)
console.log(john.printInfo())

console.log(john.addAge(1))
console.log(john.addAge(2))
console.log(john.addAge(6))
console.log(john.addAge(7))

/*
Directions were not specific, so I thought it was more interesting
for addAge to continuously increasing the age 
(versus only adding to the original age of 32 ...for this case just change line 57 to return this.age + ageIncrease).
*/


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const stringLength = (string) => {
    return new Promise( (resolve, reject) => {
        if (string.length > 10) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}

stringLength('how many chucks would a wood chuck chuck')
.then(result => {
    console.log('Big word')
})
.catch(result => {
    console.log('Small number')
})

stringLength('tiny')
.then(result => {
    console.log('Big word')
})
.catch(result => {
    console.log('Small number')
})


