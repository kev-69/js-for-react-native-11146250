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



function formatArrayStrings(strings, processedNumbers) {
    const newFormattedStrings = [];
    for (let i = 0; i < strings.length; i++) {
        const str = strings[i];
        const num = processedNumbers[i];

        if (num % 2 === 0) {
            newFormattedStrings.push(str.toUpperCase());
        } else {
            newFormattedStrings.push(str.toLowerCase());
        }
        
    }

    return newFormattedStrings;
}

// console.log(formatArrayStrings("Hello", [1, 2, 4, 5, 7]));