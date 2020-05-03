const calculadora = require('../src/js/app')

describe("calculadora", () => {
    it('Teste exemplo', () => {
        expect(23 + 7).toBe(30);
        expect(10).toBe(10);
        expect(23 + 7).not.toBe(31);
    });

    describe('Teste de soma', () => {
        it('Retorna 3 quando 2 + 1', () => {
            expect(calculadora.soma(2, 1)).toBe(3)
        })
    });

    describe('Teste de subtração', () => {
        it('Retorna 3 quando 4 - 1', () => {
            expect(calculadora.subtracao(4, 1)).toBe(3)
        })
    });

    describe('Teste de multiplicação', () => {
        it('Retorna 4 quando 2 * 2', () => {
            expect(calculadora.multiplicacao(2,2)).toBe(4)
        })
    });

    describe('Teste de divisão', () => {
        it('Retorna 2 quando 4 / 2', () => {
            expect(calculadora.divisao(4,2)).toBe(2)
        })
    });

    describe('Teste de divisão por zero', () => {
        it('Retorna 0 quando 4 / 0', () => {
            expect(calculadora.divisao(4,0)).toBe(0)
        })
    });
})