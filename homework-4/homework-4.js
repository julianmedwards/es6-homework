'use strict'

function writeToPage(parentEl, commandStr, resultStr) {
    let newEl = document.createElement('li')
    newEl.textContent = commandStr + resultStr
    parentEl.append(newEl)
}

// Exercise 1
let e1String =
    'Andrew,Siemer,42,andy@inventive.io,78621\nJames,Shaw,45,james@inventive.io,78754\nMiguel,Gonzalez,44,miguel@inventive.io,78745'

function CSVStrTo2dArr(str) {
    let arr2d = str.split('\n')
    arr2d = arr2d.map((str) => str.split(','))
    arr2d.forEach((arr) =>
        arr.forEach((item, i, arr) => {
            if (/^\d+$/.test(item)) {
                arr[i] = Number(item)
            }
        })
    )
    return arr2d
}

let e1Result = CSVStrTo2dArr(e1String)

console.log('Exercise 1')
console.log(`Input: "${e1String.replaceAll('\n', '\\n')}"`)
console.log('Output:')
console.table(e1Result)

writeToPage(document.getElementById('exercise-1'), 'See console', '')

// Exercise 2
let e2String =
    'First Name,Last Name,Age,Email,Zip Code\nAndrew,Siemer,42,andy@inventive.io,78621\nJames,Shaw,45,james@inventive.io,78754\nMiguel,Gonzalez,44,miguel@inventive.io,78745'

function CSVToCategorizedObjs(str) {
    let arr = []
    // Split lines
    let rows = str.split('\n')
    // Remove keys to separate array
    let keys = rows.splice(0, 1)[0].split(',')

    rows.map((row) => {
        arr.push({})
        row.split(',').forEach((val, i) => {
            arr[rows.indexOf(row)][keys[i]] = val
        })
    })

    return arr
}

let e2Result = CSVToCategorizedObjs(e2String)

console.log('Exercise 2')
console.log(`Input: "${e2String.replaceAll('\n', '\\n')}"`)
console.log('Output:')
console.table(e2Result)

writeToPage(document.getElementById('exercise-2'), 'See console', '')
// Exercise 3

let e3Array = [
    {
        FirstName: 'Andrew',
        LastName: 'Siemer',
        Age: 42,
        Email: 'andy@inventive.io',
        ZipCode: 78621,
    },
    {
        FirstName: 'James',
        LastName: 'Shaw',
        Age: 45,
        Email: 'james@inventive.io',
        ZipCode: 78754,
    },

    {
        FirstName: 'Miguel',
        LastName: 'Gonzalez',
        Age: 44,
        Email: 'miguel@inventive.io',
        ZipCode: 78745,
    },
]

function ObjArrToCSV(arr) {
    let CSVString = Object.keys(arr[0]).toString()
    arr.map((row) => {
        CSVString = CSVString.concat('\n', Object.values(row).toString())
    })

    return CSVString
}

let e3Result = ObjArrToCSV(e3Array)

console.log('Exercise 3')
console.log('Input: Table below')
console.table(e3Array)
console.log(`Output: ${e3Result.replaceAll('\n', '\\n')}`)

writeToPage(document.getElementById('exercise-3'), 'See console', '')

// Exercise 4
// I couldn't figure this one out on my own.
// nextPermutation Source: https://www.nayuki.io/page/next-lexicographical-permutation-algorithm
function returnAllDigitCombinations(...digits) {
    if (digits.length === 1) {
        return digits[0]
    }

    if (!digits.every((el) => typeof el === 'number')) {
        throw new TypeError('Function passed non-integer argument')
    }

    digits.sort((a, b) => a - b)

    let combos = []
    let permutation = digits
    for (; permutation; permutation = nextPermutation(digits)) {
        combos.push(permutation.join(''))
    }
    function nextPermutation(array) {
        // Find non-increasing suffix
        let i = array.length - 1
        while (i > 0 && array[i - 1] >= array[i]) i--
        if (i <= 0) return false

        // Find successor to pivot
        let j = array.length - 1
        while (array[j] <= array[i - 1]) j--
        let temp = array[i - 1]
        array[i - 1] = array[j]
        array[j] = temp

        // Reverse suffix
        j = array.length - 1
        while (i < j) {
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
            i++
            j--
        }
        return array
    }

    return combos
}

writeToPage(
    document.getElementById('exercise-4'),
    'Input: 1, 2, 3 =',
    JSON.stringify(returnAllDigitCombinations(1, 2, 3))
)
writeToPage(
    document.getElementById('exercise-4'),
    'Input: 3, 2, 1 =',
    JSON.stringify(returnAllDigitCombinations(3, 2, 1))
)
writeToPage(
    document.getElementById('exercise-4'),
    'Input: 2, 10, 4 =',
    JSON.stringify(returnAllDigitCombinations(2, 10, 4))
)
writeToPage(
    document.getElementById('exercise-4'),
    'Input: 5, 8, 5, 9 =',
    JSON.stringify(returnAllDigitCombinations(5, 8, 5, 9))
)

// Exercise 5
let getRandomHexadecimal = () => {
    return '#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)
}

writeToPage(
    document.getElementById('exercise-5'),
    'getRandomHexadecimal =',
    JSON.stringify(getRandomHexadecimal())
)
writeToPage(
    document.getElementById('exercise-5'),
    'getRandomHexadecimal =',
    JSON.stringify(getRandomHexadecimal())
)
writeToPage(
    document.getElementById('exercise-5'),
    'getRandomHexadecimal =',
    JSON.stringify(getRandomHexadecimal())
)

// Exercise 6
let fruits = [
    {
        edibleRind: true,
        color: 'red',
        name: 'apple',
    },
    {
        edibleRind: true,
        color: 'purple',
        name: 'plum',
    },
    {
        edibleRind: false,
        color: 'yellow',
        name: 'banana',
    },
    {
        edibleRind: true,
        color: 'yellow',
        name: 'apricot',
    },
]
function getValuesByPropertyName(array, prop) {
    return array.map((e) => e[prop])
}

let e6Result = getValuesByPropertyName(fruits, 'name')

console.log('Exercise 6')
console.log('Input: Table below')
console.table(fruits)
console.log('Output:')
console.log(e6Result)

writeToPage(document.getElementById('exercise-6'), 'See console', '')

// Exercise 7
let e7Array1 = ['one', 'two', 'three', 'four', 'one', 'four', 'three']
let e7Array2 = [1, 1, 3, 9, 9, 12, 15, 51, 51, 92]

function getUnique(array) {
    return array.filter((val) => array.indexOf(val) === array.lastIndexOf(val))
}

let e7Result1 = getUnique(e7Array1)
let e7Result2 = getUnique(e7Array2)

console.log('Exercise 7')
console.log('Inputs: Arrays below')
console.log(e7Array1)
console.log(e7Array2)
console.log('Outputs:')
console.log(e7Result1)
console.log(e7Result2)

writeToPage(document.getElementById('exercise-7'), 'See console', '')

// Exercise 8
// On separate page.

// Exercise 9
function fetchImage(url) {
    return new Promise((resolve, reject) => {
        let image = document.createElement('img')
        image.id = 'placeholder-image'
        image.addEventListener('load', () => {
            resolve(image)
        })
        image.addEventListener('error', () => {
            reject(image)
        })
        image.src = url
    })
}
function succeedImage() {
    resetImage()

    fetchImage('https://via.placeholder.com/200x100')
        .then((image) => document.getElementById('exercise-9').append(image))
        .catch((image) => {
            onFetchImageFail(image)
        })
}
function failImage() {
    resetImage()

    fetchImage('https://via.placeholder.com/badurl')
        .then((image) => document.getElementById('exercise-9').append(image))
        .catch((image) => {
            onFetchImageFail(image)
        })
}
function resetImage() {
    if (document.getElementById('placeholder-image')) {
        document.getElementById('placeholder-image').remove()
    }
    if (document.getElementById('image-failed-text')) {
        document.getElementById('image-failed-text').remove()
    }
}
function onFetchImageFail(image) {
    let errorMsg = `Error! Failed to load URL "${image.src}"`
    console.error(errorMsg)

    let inPageError = document.createElement('p')
    inPageError.id = 'image-failed-text'
    inPageError.textContent = errorMsg
    document.getElementById('exercise-9').append(inPageError)
}

document
    .getElementById('exercise-9-succeed')
    .addEventListener('click', succeedImage)
document.getElementById('exercise-9-fail').addEventListener('click', failImage)

// Exercise 10
// On separate page.
