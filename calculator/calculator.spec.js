const { add, staticString } = require('./calculator.js');

// it ('initaltest', () => {
//     const value = true
//     const expected = true
//     expect(value).toBe(expected)
// })

// A = Arrange
// A = Act
// A = Assert

describe("calculate functions", () => {
    describe('static string test', () => {
        test('return value contains the word static', () => {
            expect(staticString()).toStrictEqual(expect.stringContaining('static'))
        })
    })

    describe('addition tests', ()=> {
        test( "adds 2 number", ()=> {
            let expected = 4;
            let actual = add(2,2)
            expect(actual).toBe(expected);

            expected= 5;
            actual = add(2,3)
            expect(expected).toBe(actual)//-----Make sure to get the edge cases!!!

            expected = add(-5,3);
            actual = -2;
            expect(expected).toBe(actual)
        })
        test.todo("that it adds floating numbers");
        test.todo('that it adds long numbers');

        test('that it adds arrays of numbers', () => {
            let actual = (add([1,2,3]))
            let expected = 6;
            expect(actual).toBe(expected);
            expect(add([1,3,9])).toBe(13);
        });

        test.todo('that it adds negative numbers');

        test("that it adds >2 arguments", ()=> {
            
        });

        test('that it returns 0 with no arguments',  () => {
                expect(add(1,3,5)).toBe(9);
        });
        test('that it returns the argument if there is only one', () => {
            expect(add(1)).toBe(1)
        })

    })
})

