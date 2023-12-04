// Przygotowując się do najważniejszego okresu w roku Święty Mikołaj zauważył, że jego pomocnicy
// tracą dużo czasu na powtarzanie tych samych operacji przy obliczaniu trajektorii lotu sań z prezentami.
// Aby zoptymalizować pracę, Mikołaj postanowił wprowadzić poprawkę algorytmu, która pozwoli na
// przechowywanie i ponowne wykorzystanie wyników obliczeń. Niestety, nikt z zespołu elfów nie
// potrafił zaimplementować takiej funkcjonalności.
// Pomóż Mikołajowi i jego pomocnikom w rozwiązaniu tego problemu.

// it('should memoize function results', () => {
//     const complexCalculation = jest.fn().mockImplementation((x: number) => x * x);
//     const memoizedCalculation = memoize(complexCalculation);
//
//     expect(memoizedCalculation(2)).toBe(4);
//     expect(memoizedCalculation(2)).toBe(4);
//     expect(memoizedCalculation(3)).toBe(9);
//     expect(complexCalculation).toHaveBeenCalledTimes(2);
// });



export function memoize(fn: Function) {
    if (typeof fn !== 'function') {
        throw new Error('Function to be memoized must be a function.');
    }
    let cache: {[key: string]: any} = {};
    
    return function (...args: any) {
        let key = JSON.stringify(args);
        if (cache[key]) {
        return cache[key];
        } else {
        let result = fn(...args);
        cache[key] = result;
        return result
        }
    }
}


    // const complexCalculation = jest.fn().mockImplementation((x: number) => x * x);
    const memoizedCalculation = memoize( (x: number) => x *  x);
    memoizedCalculation(2);
    memoizedCalculation(2);
    // console.log(memoizedCalculation(2))
memoizedCalculation(3);

