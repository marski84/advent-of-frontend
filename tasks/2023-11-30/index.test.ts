// index.test.ts
import { optimizeLoad } from './index';

test('Zoptymalizowany ładunek nie przekracza maksymalnej masy', () => {
    const minerals = [{ value: 10, mass: 5 }, { value: 40, mass: 25 }, { value: 30, mass: 20 }];
    const maxMass = 30;
    const load = optimizeLoad(minerals, maxMass);
    const totalMass = load.reduce((acc, mineral) => acc + mineral.mass, 0);
    expect(totalMass).toBeLessThanOrEqual(maxMass);
});

test('Zoptymalizowany ładunek ma największą możliwą wartość', () => {
    const minerals = [
        { value: 10, mass: 5 },
        { value: 40, mass: 25 },
        { value: 30, mass: 20 }
    ];
    const maxMass = 30;
    const load = optimizeLoad(minerals, maxMass);
    const totalValue = load.reduce((acc, mineral) => acc + mineral.value, 0);
    expect(totalValue).toBe(50);
});

test('Jeśli masa wszystkich minerałów jest mniejsza niż maksymalna, wszystkie są wybrane', () => {
    const minerals = [
        { value: 10, mass: 5 },
        { value: 20, mass: 10 },
        { value: 15, mass: 8 }
    ];
    const maxMass = 50;
    const load = optimizeLoad(minerals, maxMass);
    expect(load.length).toBe(minerals.length);
});