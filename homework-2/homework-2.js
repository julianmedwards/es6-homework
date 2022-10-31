'use strict'

class Animal {
    constructor(firstname, lastname, age) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
    name() {
        return `${this.firstname} ${this.lastname}`
    }
}

class Human extends Animal {
    constructor(firstname, lastname, age) {
        super(firstname, lastname, age)
    }
    genus = 'homo'
    speak() {
        return `Hi my name is ${super.name()}`
    }
}
class Dog extends Animal {
    constructor(firstname, lastname, animal) {
        super(firstname, lastname, animal)
    }
    genus = 'canis'
    speak() {
        return 'woof woof woof'
    }
}

let human = new Human('julian', 'edwards', '23')
let dog = new Dog('alan', 'turing', 7)

function writeToPage(parentEl, commandStr, resultStr) {
    let newEl = document.createElement('li')
    newEl.textContent = commandStr + resultStr
    parentEl.append(newEl)
}

let inPageConsole = document.getElementById('in-page-console')
writeToPage(inPageConsole, 'human.name() = ', human.name())
writeToPage(inPageConsole, 'human.age = ', human.age)
writeToPage(inPageConsole, 'human.genus = ', human.genus)
writeToPage(inPageConsole, 'human.speak() = ', human.speak())

writeToPage(inPageConsole, 'dog.name() = ', dog.name())
writeToPage(inPageConsole, 'dog.age = ', dog.age)
writeToPage(inPageConsole, 'dog.genus = ', dog.genus)
writeToPage(inPageConsole, 'dog.speak() = ', dog.speak())
