function testKata1SimpleStringReverse() {
    let result = kata1("This is a string");
    console.assert(result === "gnirts a si sihT", {
        "function": "kata1(\"This is a string\")",
        "expected": "gnirts a si sihT",
        "result": result
    });
}

function testKata1EmptyString() {
    let result = kata1("");
    console.assert(result === "", {
        "function": "kata1(\"\")",
        "expected": "\"\"",
        "result": result
    }); 
}

function testKata2SimpleStringReverse() {
    let result = kata2("This a is string");
    console.assert(result === "string is a This", {
        "function": "kata2(\"This is a string\")",
        "expected": "string a is This",
        "result": result
    });
}

function testKata2EmptyString() {
    let result = kata2("");
    console.assert(result === "", {
        "function": "kata2(\"\")",
        "expected": "\"\"",
        "result": result
    }); 
}

function testKata3ArrayOfNumbers() {
    let result = kata3([4, 6, 78, 2, 3, -8, -9]);
    console.assert(result == -9, {
        "function": "kata3([4, 6, 78, 2, 3, -8, -9])",
        "expected": "-9",
        "result": result
    });
}

function testKata3Empty() {
    let result = kata3([]);
    console.assert(Number.isNaN(result), {
        "function": "kata3([])",
        "expected": "NaN", 
        "result": result
    });
}

function testKata4ArrayOfNumbers() {
    let result = kata4([3, 1, 6, -3, 6]);
    console.assert(result === 6, {
        "function": "kata4([3, 1, 6, -3, 6])",
        "expected" : 6,
        "result": result
    });
}

function testKata4Empty() {
    let result = kata4([]);
    console.assert(Number.isNaN(result), {
        "function": "kata4([])",
        "expected": "NaN", 
        "result": result
    });
}

function testKata5PositiveNumbers() {
    let result = kata5(5, 3);
    console.assert(result === 2, {
        "function": "kata5(5, 3)",
        "expected": 2,
        "result": result
    });
}

function testKata5NegativeNubmers() {
    let result = kata5(-5, 3);
    console.assert(result === -2, {
        "function": "kata5(-5, 3)",
        "expected": -2,
        "result": result
    });
}

function testKata6ArrayOfNumbers() {
    let result = kata6([1, 3, 5, 3, 7, 3, 1, 1, 5,1, 3, 5, 3, 7, 3, 1, 1, 5,1, 3, 5, 3, 7, 3, 1, 1, 5]);
    console.assert(JSON.stringify(result) == "[1,3,5,7]", {
        "function": "kata6([1, 3, 5, 3, 7, 3, 1, 1, 5,1, 3, 5, 3, 7, 3, 1, 1, 5,1, 3, 5, 3, 7, 3, 1, 1, 5])",
        "expected": JSON.stringify([1, 3, 5, 7]),
        "result": JSON.stringify(result)
    });
}

function testKata6AnotherArrayOfNumbers() {
    let result = kata6([-3, -83, 9, 23450, -35, 98.9, 2.3, -.8323, -3, -83, 9, 23450, -35, 98.9, 2.3, -.8323, -3, -83, 9, 23450, -35, 98.9, 2.3, -.8323]);
    console.assert(JSON.stringify(result) === "[-83,-35,-3,-0.8323,2.3,9,98.9,23450]", {
        "function": "kata6([-3, -83, 9, 23450, -35, 98.9, 2.3, -.8323, -3, -83, 9, 23450, -35, 98.9, 2.3, -.8323, -3, -83, 9, 23450, -35, 98.9, 2.3, -.8323])",
        "expected": "[-83, -35, -2, -.8323, 2.3, 9, 98.9, 23450]",
        "result": JSON.stringify(result)
    });
}

function testKata7ArrayOfNumbers() {
    let result = kata7([1, 3, 5, 3, 7, 3, 1, 1, 5,1, 3, 5, 3, 7, 3, 1, 1, 5,1, 3, 5, 3, 7, 3, 1, 1, 5]);
    console.assert(result === "1(9) 3(9) 5(6) 7(3)", {
        "function": "kata7([1, 3, 5, 3, 7, 3, 1, 1, 5,1, 3, 5, 3, 7, 3, 1, 1, 5,1, 3, 5, 3, 7, 3, 1, 1, 5])",
        "expected": "1(9) 3(9) 5(6) 7(3)",
        "result": result
    });   
}

function testKata7AnotherArrayOfNumbers() {
    let result = kata7([-3, -83, 9, 23450, -35, 98.9, 2.3, -.8323, -3, -83, 9, 23450, -35, 98.9, 2.3, -.8323, -3, -83, 9, 23450, -35, 98.9, 2.3, -.8323]);
    console.assert(result === "-83(3) -35(3) -3(3) -0.8323(3) 2.3(3) 9(3) 98.9(3) 23450(3)", {
        "function": "kata7([-3, -83, 9, 23450, -35, 98.9, 2.3, -.8323, -3, -83, 9, 23450, -35, 98.9, 2.3, -.8323, -3, -83, 9, 23450, -35, 98.9, 2.3, -.8323])",
        "expected": "-83(3) -35(3) -3(3) -0.8323(3) 2.3(3) 9(3) 98.9(3) 23450(3)",
        "result": result
    }); 
}

function testKata8SimpleEvalution() {
    let result = kata8("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    console.assert(result === -3, {
        "function": "kata8(\"a + b + c - d\", {a: 1, b: 7, c: 3, d: 14})",
        "expected": -3,
        "result": result
    });
}

function testKata8StartingNegative() {
    let result = kata8("a + b + c - d", {a: -1, b: 7, c: -3, d: 14});
    console.assert(result === -11, {
        "function": "kata8(\"a + b + c - d\", {a: -1, b: 7, c: -3, d: 14})",
        "expected": -11,
        "result": result
    });
}




const testArray = [
    testKata1SimpleStringReverse,
    testKata1EmptyString,
    testKata2SimpleStringReverse,
    testKata2EmptyString, 
    testKata3ArrayOfNumbers,
    testKata3Empty,
    testKata4ArrayOfNumbers,
    testKata4Empty,
    testKata5PositiveNumbers,
    testKata5NegativeNubmers,
    testKata6ArrayOfNumbers,
    testKata6AnotherArrayOfNumbers,
    testKata7ArrayOfNumbers,
    testKata7AnotherArrayOfNumbers,
    testKata8SimpleEvalution,
    testKata8StartingNegative
];

for (let test of testArray) {
    test();
}