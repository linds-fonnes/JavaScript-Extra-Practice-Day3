/*
TASK 1 🚀
// in your own words explain what a closure is below in comments and then write an example of a closure. Try to make this explaination simple enough to explain to a younger sibling. */
// A closure is when an inner function reaches to the outer function to receive the variable that it needs.
// An example would be :
// function outerFunc(){
//   let outerVar = 'I am outside!'

//   function innerFunc(){
//     console.log(outerVar);
//   }
//   innerFunc();
// }
// outerFunc();



/*
TASK 2 🚀
// look at the code below and explain in your own words where the variable 'count' is available. 
// Explain why 'count' is initialized with a let and not a var or const. 
// Explain how initalizing the variable 'count' with a var would change it's scope
*/
// function counterMaker() {
//     let count = 0;
//     return function counter() {
//      return count++;
//     }
//   }

// Count is available  inside of the entire counterMaker function. If it was initialized with a var then it would be available throughout the entire global scope and if it was initialized with a const then it would not be able to increment inside of the counter function. 




/*
TASK 3 🚀
* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When a function is contained in the global scope, the value of 'this' inside of the function will be the window object Window Binding
* 2. When a function is caslled by a preceding dot, the object before that dot it 'this' 'implicit binding'. Implicit Binding
* 3. Whenever a constructor function is used, 'this' referse to the specific object that is created and returned by the constructor function . New Binding
* 4. Whenever JavaScripts call or apply method is used, 'this' is explicitly defined. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function greetMe(name){
//   console.log('Hello' + name)
//   console.log(this);
// }
// greetMe('John')

// Principle 2

// code example for Implicit Binding

// var greetMe = {
//   greeting: 'Hello',
//   speak: function(name){
//     console.log(this.greeting + name);
//     console.log(this);
//   }
// }

// greetMe.speak('Potato')

// Principle 3

// code example for New Binding

// function GreetMe(name){
//   this.greeting = 'Hello',
//   this.name = name ,
//   this.speak = function(){
//     console.log(this.greeting + this.name);
//     console.log(this);
//   }
// }

// var greetJohn = new GreetMe('John');
// var greetJane = new GreetMe('Jane');
// greetJohn.speak();
// greetJane.speak

// Principle 4

// code example for Explicit Binding
// greetJohn.sayGoodbye.call(greetJane);
// greetJane.sayGoodbye.apply(greetJohn);





/*
TASK 4 🚀
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
// function GameObject(attributes){
// this.createdAt = attributes.createdAt;
// this.name = attributes.name;
// this.dimensions= attributes.dimensions;
// }

// GameObject.prototype.destroy = function(){
//   return `${this.name} was removed from the game`
// }


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
// function CharacterStats(attributes){
//   GameObject.call(this,attributes);
//   this.healthPoints = attributes.healthPoints;
// }

// CharacterStats.prototype.takeDamage= function(){
//   return `${this.name} took damage`
// }

// CharacterStats.prototype = Object.create(GameObject.prototype);


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

// function Humanoid(attributes){
//   this.team = attributes.team;
//   this.weapons = attributes.weapons;
//   this.language = attributes.langauge;
// }
// CharacterStats.prototype.greet = function(){
//   return `${this.name} offers a greeting in ${this.language}`
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype);
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  // const mage = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 1,
  //     height: 1,
  //   },
  //   healthPoints: 5,
  //   name: 'Bruce',
  //   team: 'Mage Guild',
  //   weapons: [
  //     'Staff of Shamalama',
  //   ],
  //   language: 'Common Tongue',
  // });
  // const swordsman = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 2,
  //     height: 2,
  //   },
  //   healthPoints: 15,
  //   name: 'Sir Mustachio',
  //   team: 'The Round Table',
  //   weapons: [
  //     'Giant Sword',
  //     'Shield',
  //   ],
  //   language: 'Common Tongue',
  // });
  // const archer = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 1,
  //     width: 2,
  //     height: 4,
  //   },
  //   healthPoints: 10,
  //   name: 'Lilith',
  //   team: 'Forest Kingdom',
  //   weapons: [
  //     'Bow',
  //     'Dagger',
  //   ],
  //   language: 'Elvish',
  // });
  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.







/*
TASK 5 🚀
// convert the constructor functions above to class syntax copy and paste the objects and console logs below the class syntax to test if your code is working
 */

class gameObject{
  constructor(attributes){
  this.createdAt = new Date();
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
  }
  destroy(){
    return `${this.name} was removed from the game.`
  }
}

class CharacterStats extends gameObject{
  constructor(attributes){
    super(attributes)
      this.healthPoints = attributes.healthPoints; 
    }
    takeDamage(){
      return `${this.name} was removed from the game`
    }
}

class Humanoid extends CharacterStats{
  constructor(attributes){
    super(attributes)
      this.team = attributes.team;
      this.weapons = attributes.weapons;
      this.language = attributes.language
    }
    greet(){
      return `${this.name} offers a greeting in ${this.language}`
    }
  }


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

