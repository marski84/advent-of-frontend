import { processBirdObservations, BirdObservation } from './index';

describe('processBirdObservations', () => {
    test('grupuje obserwacje według nazwy ptaka i oblicza średnie współrzędne', () => {
        const observations: BirdObservation[] = [
            { name: 'Kania', date: '2023-04-01', coordinates: { latitude: 50, longitude: 19 } },
            { name: 'Kania', date: '2023-04-02', coordinates: { latitude: 52, longitude: 21 } },
            { name: 'Sokol', date: '2023-04-01', coordinates: { latitude: 48, longitude: 17 } },
        ];
        const expected = {
            Kania: {
                dates: ['2023-04-01' ,'2023-04-02'],
                averageCoordinates: { latitude: 51, longitude: 20 },
            },
            Sokol: {
                dates: ['2023-04-01'],
                averageCoordinates: { latitude: 48, longitude: 17 },
            },
        };
        
  
        
        expect(expected).toContain(processBirdObservations(observations));
   
    });
});