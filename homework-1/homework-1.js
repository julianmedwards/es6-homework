'use strict'

function Animal(firstname, lastname, age) {
    this.firstname = firstname
    this.lastname = lastname
    this.age = age
}
Animal.prototype.name = function () {
    return `${this.firstname} ${this.lastname}`
}

function Human(firstname, lastname, age) {
    Animal.call(this, firstname, lastname, age)
    this.genus = 'homo'
}
Object.setPrototypeOf(Human.prototype, Animal.prototype)
Human.prototype.speak = function () {
    return `My name is ${this.name()}`
}

function Dog(firstname, lastname, age) {
    Animal.call(this, firstname, lastname, age)
    this.genus = 'canis'
}
Object.setPrototypeOf(Dog.prototype, Animal.prototype)
Dog.prototype.speak = function () {
    return 'woof woof woof'
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
