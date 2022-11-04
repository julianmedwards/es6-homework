'use strict'

function writeToPage(parentEl, commandStr, resultStr) {
    let newEl = document.createElement('li')
    newEl.textContent = commandStr + resultStr
    parentEl.append(newEl)
}

// Exercise 8

// LifeObject
//   Plant
//     Corn

//   Animal
//     Terrestrian
//       Primate
//         Human
//         Monkey
//      Carnivoran
//        Cat
//        Dog

//     Aquarian
//       Fish
//       Whale

//     Amphibian
//       Turtle
//       Salientian
//         Frog
//         Toad

class LifeObject {
    constructor(commonName, age) {
        this.commonName = commonName
        this.age = age
    }
}

class Plant extends LifeObject {
    constructor(commonName, age) {
        super(commonName, age)
    }
    photosynthesize() {
        console.log(`${this.selfRef} photosynthesizes.`)
    }
}
class Corn extends Plant {
    constructor(commonName, age) {
        super(commonName, age)
    }
    ears = 0
    growEar() {
        this.ears += 1
    }
}

class Animal extends LifeObject {
    constructor(commonName, age, personalName) {
        super(commonName, age)
        this.personalName = personalName
        this.selfRef = this.getSelfRef()
    }
    getSelfRef = () => {
        if (this.personalName) {
            return this.personalName
        } else {
            return `A ${this.commonName}`
        }
    }
    breathe() {
        console.log(`${this.selfRef} breathes.`)
    }
}

class Terrestrian extends Animal {
    constructor(commonName, age, personalName) {
        super(commonName, age, personalName)
    }
    walk() {
        console.log(`${this.selfRef} walks.`)
    }
}

class Primate extends Terrestrian {
    constructor(commonName, age, personalName, hairColor) {
        super(commonName, age, personalName)
        this.hairColor = hairColor
    }
    useTool(tool) {
        console.log(`${this.selfRef} uses a ${tool}.`)
    }
}
class Human extends Primate {
    constructor(commonName, age, personalName, hairColor) {
        super(commonName, age, personalName, hairColor)
    }
    giveName(subject, name) {
        if (!subject.personalName) {
            console.log(
                `${this.selfRef} named a ${subject.commonName} ${name}.`
            )
            subject.personalName = name
            subject.selfRef = subject.getSelfRef()
        } else {
            console.log(
                `${this.selfRef} tried to name ${subject.selfRef} who already has a name!`
            )
        }
    }
}
class Monkey extends Primate {
    constructor(commonName, age, personalName, hairColor) {
        super(commonName, age, personalName, hairColor)
    }
    groomOther(subject) {
        if (subject.hairColor) {
            console.log(`${this.selfRef} groomed ${subject.selfRef}.`)
        } else {
            console.log(
                `${this.selfRef} tried to groom ${subject.selfRef} but couldn't find any hair.`
            )
        }
    }
}

class Carnivoran extends Terrestrian {
    constructor(commonName, age, personalName, hairColor) {
        super(commonName, age, personalName)
        this.hairColor = hairColor
    }
    flattenEars() {
        console.log(`${this.selfRef} flattens their ears.`)
    }
    tail = true
}
class Cat extends Carnivoran {
    constructor(commonName, age, personalName, hairColor) {
        super(commonName, age, personalName, hairColor)
    }
    meow() {
        console.log(`${this.selfRef} meows.`)
    }
}
class Dog extends Carnivoran {
    constructor(commonName, age, personalName, hairColor) {
        super(commonName, age, personalName, hairColor)
    }
    bark() {
        console.log(`${this.selfRef} barks.`)
    }
}

class Aquarian extends Animal {
    constructor(commonName, age, personalName) {
        super(commonName, age, personalName)
    }
    swim() {
        console.log(`${this.selfRef} swims.`)
    }
}
class Whale extends Aquarian {
    constructor(commonName, age, personalName) {
        super(commonName, age, personalName)
    }
    spout() {
        console.log(`${this.selfRef} spouts from its blowhole.`)
    }
}
class Fish extends Aquarian {
    constructor(commonName, age, personalName) {
        super(commonName, age, personalName)
    }
}

class Amphibian extends Animal {
    constructor(commonName, age, personalName) {
        super(commonName, age, personalName)
    }
    walk() {
        console.log(`${this.selfRef} walks.`)
    }
    swim() {
        console.log(`${this.selfRef} swims.`)
    }
}
class Turtle extends Amphibian {
    constructor(commonName, age, personalName) {
        super(commonName, age, personalName)
    }
    retract() {
        console.log(`${this.selfRef} retracts into its shell.`)
    }
}

class Salientian extends Amphibian {
    constructor(commonName, age, personalName) {
        super(commonName, age, personalName)
    }
    hop() {
        console.log(`${this.selfRef} hops.`)
    }
    croak() {
        console.log(`${this.selfRef} croaks.`)
    }
}
class Frog extends Salientian {
    constructor(commonName, age, personalName) {
        super(commonName, age, personalName)
    }
}
class Toad extends Salientian {
    constructor(commonName, age, personalName) {
        super(commonName, age, personalName)
    }
}

let human1 = new Human('Human', 30, 'John', 'brown')
let monkey1 = new Monkey('Monkey', 8, null, 'black')

console.log('Exercise 8')
human1.useTool('camera')
monkey1.groomOther(human1)
human1.giveName(monkey1, 'Bob')
monkey1.useTool('stick')

console.log('\n')

let cat1 = new Cat('Tabby Cat', 6, null, 'grey')
let dog1 = new Dog('Labrador', 12, 'Buster', 'gold')

dog1.bark()
cat1.flattenEars()
cat1.meow()
dog1.flattenEars()

console.log('\n')

let whale1 = new Whale('Humpback', 45, null, 'grey')
let frog1 = new Frog('Treefrog', 2, null)

human1.walk()
dog1.walk()
whale1.swim()
frog1.walk()
frog1.swim()
frog1.hop()

writeToPage(
    document.getElementById('exercise-8'),
    'See console and script source.',
    ''
)
