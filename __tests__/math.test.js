import { divide, multiply, sum } from '../math';

//!Алиасы - it.skip = xit
        //! it.only = fit

describe('math', () => { 
    describe('divide', () => {
        it.each([ // Параметризированные тесты для проверки деления
            {inputA: 6, inputB: 3, expected: 2}, // Тестовые данные: 6 делить на 3 должно дать 2
            {inputA: 12, inputB: 3, expected: 4} // Тестовые данные: 12 делить на 3 должно дать 4
        ])('should $inputA divided to $inputB equals $expected', ({inputA, inputB, expected}) => {
            const result = divide(inputA, inputB) // Выполняем деление
            
            expect(result).toBe(expected) // Проверяем, что результат соответствует ожидаемому
        })

        it('should return Infinity dividing by 0', () => {
            const expectedResult = NaN; // Ожидаемый результат - NaN (не число)

            const result = divide(10/0) // Попытка деления на ноль

            expect(result).toBe(expectedResult) // Проверяем, что результат соответствует ожидаемому
        })
    });

    describe('multiply', () => { // Описание тестов для функции умножения
        it('should multiply positive numbers', () => {
            // AAA - arrange, act, assert
            // Структура теста: подготовить данные, выполнить действие, проверить результат.
            const expectedResult = 6;
    
            const actualResult = multiply(3, 2);
    
            expect(actualResult).toBe(expectedResult); // Проверка на строгое равенство (по значению и типу, аналог ===).
            expect({a: 1}).toEqual({a: 1}); // Проверка структурного равенства объектов (по значению, но не по ссылке).
            expect([1, 2, 3]).toHaveLength(3); // Проверка длины массива.
            expect([1, 2, 3]).toContain(3); // Проверка наличия значения 3 в массиве.
            expect([1, 2, 3]).not.toContain(4); // Проверка отсутствия значения 4 в массиве.
    
            expect(undefined).toBeUndefined(); // Проверка, что значение равно `undefined`.
            expect(null).toBeNull(); // Проверка, что значение равно `null`.
    
            expect(actualResult).toBeDefined(); // Проверка, что значение определено (не undefined).
            expect(actualResult).toBeTruthy(); // Проверка, что значение истинное (любое значение, которое не `null`, `undefined`, `false`, `0`, `NaN` или пустая строка).
            expect(false).toBeFalsy(); // Проверка, что значение ложное (`false`, `0`, `''`, `null`, `undefined`, `NaN`).
        });
    
        it('should multiply negative numbers', () => {
            const res = multiply(-3, -2);
        
            expect(res).toBe(6)
        });
    
        it('should multiply negative and positive numbers', () => { 
            const res = multiply(3, -2);
        
            expect(res).toBe(-6)
        });
    });

    describe('sum', () => { // Описание тестов для функции сложения
        it('should sum 2 digits', () => { 
            const expectedResult = 10; // Ожидаемый результат сложения

            const result = sum(7, 3); // Выполняем сложение

            expect(result).toBe(expectedResult) // Проверяем результат на соответствие ожидаемому
        })
    });
})
