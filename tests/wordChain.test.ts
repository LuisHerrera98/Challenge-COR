import { findCircularChain } from '../src/wordChain';

describe('findCircularChain', () => {
  test('funciona cuando hay cadena circular', () => {
    const words = ['chair', 'height', 'racket', 'touch', 'tunic'];
    const result = findCircularChain(words);

    expect(result.length).toBe(5);
  });

  test('devuelve vacío cuando no hay cadena', () => {
    const words = ['apple', 'banana'];
    const result = findCircularChain(words);

    expect(result.length).toBe(0);
  });
});