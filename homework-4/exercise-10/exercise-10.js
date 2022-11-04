'use strict'

function writeToPage(parentEl, commandStr, resultStr) {
    let newEl = document.createElement('li')
    newEl.textContent = commandStr + resultStr
    parentEl.append(newEl)
}

// Exercise 10
let foldersAndFiles = [
    [
        ['fileF1', 'fileF1', 'fileF1', 'fileF1'],
        ['fileF2', 'fileF2', 'fileF2', 'fileF2'],
    ],
    [
        [['fileF3', 'fileF3', [['passwords.txt']], ['fileF3']], ['fileF3'], []],
        ['fileF3'],
    ],
]

function findFile(fileSystem, fileName) {
    let file = fileSystem.find((el) => el === fileName)
    if (file) {
        return file
    } else {
        for (let directory of fileSystem) {
            if (Array.isArray(directory)) {
                file = findFile(directory, fileName)
                if (file) {
                    return file
                }
            } else continue
        }
    }
}

let passwords = findFile(foldersAndFiles, 'passwords.txt')
writeToPage(
    document.getElementById('exercise-10'),
    'findFile(fileSystem, fileName = "passwords.txt") = ',
    `"${passwords}"`
)
