function processArray(numbers) {
    const processedArray = [];

    for (const num of numbers) {
        if (num % 2 === 0) {
            processedArray.push(num ** 2);
        } else {
            processedArray.push(num * 3);
        }
    }
    return processedArray;
}

// console.log(processArray([2, 5, 1, 14, 12]));