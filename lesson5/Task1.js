
// lesson 2, Task1.js
function checkNumbera(a = 0, b = 0, c = 0) {
    const sumABC = a + b + c

    if (sumABC === 100 || a < 0 || b < 0 || c < 0) console.log('нет')
    if (a > (b + c)) console.log(-1)
    if (sumABC < 0) console.log(500)
    if (sumABC > 0) console.log(0)
}

// lesson 2, Task2.js
function argSumGT100(a = 0, b = 0) {
    const c = a + b > 100
    console.log(c ? 'да' : 'нет')
}

// lesson 2, Task3.js
function checkBoolean(a = true, b = true, c = true) {
    const d = c ? a || b : a && b

    let d1

    if (c) {
        d1 = a || b
    } else {
        d1 = a && b
    }

    console.log(d)
    console.log(d1)
}

// lesson 3, Task1.js
function copySimpleArray(simpleArray) {
    return [...simpleArray]
}


// lesson 3, Task2.js
function isSortedArray(numberArray) {
    // Код, который проверит, является ли массив отсортированным
    const arrayString = numberArray.join('')
    const sortedArrayString = numberArray.sort((a, b) => a - b ).join('')

    let isSortedArray = arrayString === sortedArrayString

    console.log(isSortedArray)
}


// lesson 3, Task3.js
function sortOddsOnly(arr) {
    const oddsArray = arr.filter(n => n % 2 !== 0).sort((a, b) => a - b);

    let oddIndex = 0;

    for (let arrIndex = 0; arrIndex < arr.length; arrIndex++) {
        if (arr[arrIndex] % 2 !== 0) {
            arr[arrIndex] = oddsArray[oddIndex]
            oddIndex++
        }
    }
}


// lesson 4, Task1.js
function isEmptyObj(obj = {}) {
    let isEmpty = Object.keys(obj).length === 0

    console.log(isEmpty)
}


// lesson 4, Task2.js
function filterOdds(obj = {}) {
    let resultObj = {}

    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'number' && value % 2 === 0) {
            resultObj[key] = value
        }
    })

    console.log(resultObj); // { prop2: 2, prop5: 10 }
}


// lesson 4, Task3.js
function countTypes(obj = {}) {
    const result = {
        number: 0,
        string: 0,
        boolean: 0,
        null: 0,
        undefined: 0,
        symbol: 0,
        bigint: 0,
        object: 0,
    };

    Object.values(obj).forEach(v => v === null ? result.null += 1 : result[typeof v] += 1 )


    console.log(result); // {null: 1, object: 1, string: 1, number: 2}
}