// Exercise # 1:
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

function showFavFoods(person){
    for (let i in person){
        if (Array.isArray(person[i]) && typeof person[i][0] == 'object') {
            for (let obj of person[i]) {
                console.log('My favorite shakes from the following places are: \n')
                for (let j in obj) {
                    console.log(`${j}: ${obj[j]}`)
                }
            }
        } else if (Array.isArray(person[i])) {
            console.log(`My favorite food types for ${i}: ${person[i].join(', ')}`);

        } else {
            console.log(`My favorite food types for ${i}: ${person[i]}`)
        }
    }
}

showFavFoods(person3)


// Exercise 2: 
function Person(name, age){
    this.name = name;
    this.age = age;
    

    this.printInfo = () => {
        this.age = this.age + 1
        console.log(`Your name is ${this.name} and you were ${this.age - 1}, but now you're ${this.age}!`);
        return 'Returned Value';
    }

    this.addAge = (yearsIncrease) => {
        this.age = this.age + yearsIncrease;
        console.log(`This is your current age plus ${yearsIncrease}: ${this.age}.`);
        return 'Returned Value';
    }

}

let person1 = new Person('Steve', 32)
let person2 = new Person('James', 18)

person1.printInfo()
person1.addAge(3)
person2.printInfo()
person2.addAge(0)


// Exercise 3: 
const longerThan10 = (string) => {
    return new Promise((resolve, reject) => {
        if (string.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

longerThan10("watermelons")

.then((result) => {
    console.log('Big Word');
})
.catch((error) => {
    console.log('Small Number')
})



// Codewars portion of Homework: 
// One that I've done previously in Python (You're a square!):
var isSquare = function(n) {
    if (n >= 0 && Math.sqrt(n) ** 2 == n) {
      return true;
    } else {
      return false;
    }
  }

// One that I haven't done yet in Python:
// Convert Boolean values to strings 'Yes' or 'No':
function boolToWord( bool ){
    if (bool == true){
      return 'Yes'
    } else {
      return 'No'
    }
}