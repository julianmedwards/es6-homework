'use strict'

function writeToPage(parentEl, commandStr, resultStr) {
    let newEl = document.createElement('li')
    newEl.textContent = commandStr + resultStr
    parentEl.append(newEl)
}

// Exercise 1
let getCountdownIterator = function* () {
    for (let count = 9; count > 0; count--) {
        yield count
    }
}
console.log([...getCountdownIterator()])

writeToPage(
    document.getElementById('exercise-1'),
    '[...getCountdownIterator()] = ',
    [...getCountdownIterator()]
)

// Exercise 2
let iterableTodoList = {
    todoItems: [],
    addItem(description) {
        this.todoItems.push({description, done: false})
        return this
    },
    crossOutItem(index) {
        if (index < this.todoItems.length) {
            this.todoItems[index].done = true
        }
        return this
    },
    [Symbol.iterator]: function () {
        let i = 0
        const todoItems = this.todoItems
        return {
            next: function () {
                return {
                    value: todoItems[i],
                    done: !todoItems.hasOwnProperty(i++),
                }
            },
        }
    },
}

iterableTodoList.addItem('get milk')
iterableTodoList.addItem('get printer paper')
iterableTodoList.addItem('order cables')
iterableTodoList.addItem('change oil')
iterableTodoList.addItem('ES6 homework 3, exercise 2')
iterableTodoList.crossOutItem(iterableTodoList.todoItems.length - 1)

let itemCount = 0
for (let item of iterableTodoList) {
    console.log(item)
    itemCount++
    writeToPage(
        document.getElementById('exercise-2'),
        `Item #${itemCount}: `,
        JSON.stringify(item)
    )
}

// Exercise 3
let exercise3 = document.getElementById('exercise-3')
let answer = document.createElement('p')
answer.innerHTML =
    'First next() call runs first iteration, yielding 1. Generator keeps its state and awaits the next call which will continue after that line.<br>' +
    "<br>Next iteration throws error, it's not actually returning/yielding anything, so I wouldn't expect console.log() to actually output anything. Just a normal error message.<br>" +
    '<br>Using the spread operator the generator will run until done.<br> The console.log([...errorDemo()]) will throw an error and not show the first yield as we attempted to do it all at once.<br>' +
    '<br>In contrast the (for... of) loop will print the first yield before throwing the error.'
exercise3.append(answer)
