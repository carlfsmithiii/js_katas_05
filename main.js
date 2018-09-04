
function kata1(string) {
    return [...string].reverse().join('');
}

function kata2(string) {
    return string.split(' ').reverse().join(' ');
}

function kata3(arrayOfNumbers) {
    return arrayOfNumbers.length > 0 ? arrayOfNumbers.reduce((accumulator, element) => Math.min(accumulator, element)) : Number.NaN;
}

function kata4(arrayOfNumbers) {
    return arrayOfNumbers.length > 0 ? arrayOfNumbers.reduce((accumulator, element) => Math.max(accumulator, element)) : Number.NaN;
}

function kata5(numerator, denominator) {
    return numerator % denominator;
}

function kata6(arrayIncludingDuplicates) {
    return [...new Set(arrayIncludingDuplicates)].sort(function (a, b) {
        return Number(a) - Number(b)
    });
}

function kata7(arrayIncludingDuplicates) {
    const arrayWithoutDuplicates = kata6(arrayIncludingDuplicates);
    let returnString = "";
    for (let element of arrayWithoutDuplicates) {
        returnString += element + "(" + arrayIncludingDuplicates.filter((entry) => entry == element).length + ") ";
    }
    return returnString.slice(0, -1);
}

function kata8(expressionString, variableMap) {
    const expressionArray = expressionString.split(/\s/);
    let multiplier = 1;
    let accumulator = 0; 
    for (let element of expressionArray) {
        switch(element) {
            case '+':
                multiplier = 1;
                break;
            case '-':
                multiplier = -1;
                break;
            default:
                accumulator += multiplier * variableMap[element];
                break;
        }
    }
    return accumulator;
}


// console.log(kata1("This is a string"));
// console.log(kata2("This is a string"));
// console.log(kata3([3, 1, 6, -3, 6]));
// console.log(kata4([3, 1, 6, -3, 6]));
// console.log(kata5(5, 3));
// console.log(kata6([1, 3, 5, 3, 7, 3, 1, 1, 5]));
// console.log(kata7([1, 3, 5, 3, 7, 3, 1, 1, 5]));
// console.log(kata8("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}));