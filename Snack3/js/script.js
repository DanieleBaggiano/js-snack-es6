function arguments(array, numA, numB) {
    if (numA >= numB || numB >= array.length) {
        return [];
    }

    const newArray = [];

    array.forEach((elem, numbers) => {
        if (numbers >= numA && numbers <= numB) {
            newArray.push(elem);
        }
    });

    return newArray;
}

const array = [10, 20, 30, 40, 50, 60, 70];
console.log(array);

const nuovoArray = arguments(array, 1, 5);
console.log(nuovoArray);
