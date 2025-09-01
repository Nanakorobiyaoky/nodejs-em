const array = [2,3,4,1,2,3,4,5]

// Код, который проверит, является ли массив отсортированным
const arrayString = array.join('')
const sortedArrayString = array.sort((a, b) => a - b ).join('')

let isSortedArray = arrayString === sortedArrayString

console.log(isSortedArray)