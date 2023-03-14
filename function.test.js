const functions = require('./function.js')

// task1 
test('check lenght of string',()=>{
    const sample1 = "safari";
    expect(functions.stringLength(sample1)).toBe(6);
})

test('check if length is 0',()=>{
    const sample2 = "";
    expect(()=> functions.stringLength(sample2)).toThrow();
})

test('check if length > 10',()=>{
    const sample3 = "aaaaaaaaaaa";
    expect(()=> functions.stringLength(sample3)).toThrow();
})

// task2
test('validation for Reverse of String',()=>{
    expect(functions.reverseString("abc")).toMatch(/cba/);
})

// task 3

describe('validation for add',()=>{
    // test 1
    test ('2+0',()=>{
        expect(functions.calculator.add(2,0)).toBe(2);
    });

    test('2+ (-2)',()=>{
        expect(functions.calculator.add(2,-2)).toBe(0);
    })
    test('(-2) + (-2)',()=>{
        expect(functions.calculator.add(-2,-2)).toBe(-4);
    })
})

describe('validation for subtract',()=>{
    test ('(-2) - (-2) ',()=>{
        expect(functions.calculator.sub(-2,-2)).toBe(0);
    });

    test ('(-8) - (5) ',()=>{
        expect(functions.calculator.sub(-8,-5)).toBe(-3);
    });

    test ('(5) - (2) ',()=>{
        expect(functions.calculator.sub(5,2)).toBe(3);
    });

})

describe('validation for multiply',()=>{
    test('2 X 0',()=>{
        expect(functions.calculator.multiply(2,0)).toBe(0);
    })

    test('-1 X 3',()=>{
        expect(functions.calculator.multiply(-1 ,3 )).toBe(-3);
    })

    test('5 X 5',()=>{
        expect(functions.calculator.multiply(5,5)).toBe(25)
    })
})

describe('validation for divide',()=>{
    test('2 / 0 ',()=>{
        expect(()=> functions.calculator.divide(2,0)).toThrow();
    })

    test('0 / 2 ',()=>{
        expect(functions.calculator.divide(0,2)).toBe(0);
    })

    test('-2 / 2 ',()=>{
        expect(functions.calculator.divide(-2,2)).toBe(-1);
    })

})

// task 4 

test('validation for Start with Capital letter',()=> {

    expect(functions.startWithCapital('safari')).toMatch(/Safari/);
})