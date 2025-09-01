const obj = { prop1: 1, prop2: 2, prop3: true, prop4: 'test', prop5: 10 }
let resultObj = {}

Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'number' && value % 2 === 0) {
        resultObj[key] = value
    }
})

console.log(resultObj); // { prop2: 2, prop5: 10 }