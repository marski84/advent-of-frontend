// Tutaj skopiuj testy dla zadania. Uruchom je poleceniem `npm test`
import { calculateTilesNeeded } from './index';

describe('calculateTilesNeeded', () => {
    test('returns correct tile count for single section', () => {
        expect(calculateTilesNeeded([{ width: 5, height: 3 }])).toBe(15);
    });
    
    test('returns correct tile count for multiple sections', () => {
        expect(calculateTilesNeeded([
            { width: 5, height: 3 },
            { width: 2, height: 2 },
            { width: 3, height: 4 }
        ])).toBe(31);
    });
    
    test('returns zero when no sections are provided', () => {
        expect(calculateTilesNeeded([])).toBe(0);
    });
});