// Исходные массив
// [1, 2, 3, 4, 10, 11, 3, 15, 20]
// Результат работы кода
// Четные остались на том же месте, а нечетные отсортированы
// [1, 2, 3, 4, 10, 3, 11, 15, 20]


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

const arr = [1, 2, 3, 4, 10, 3, 11, 15, 20]
sortOddsOnly(arr)
console.log(arr)
