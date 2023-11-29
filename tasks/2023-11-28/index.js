"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processBirdObservations = void 0;
function processBirdObservations(observations) {
    // Twoja implementacja tutaj
    var birds = observations.map(function (observation) {
        var _a;
        var birdName = observation.name;
        var date = observation.date;
        var coordinates = observation.coordinates;
        if (!birdName || !date || !coordinates) {
            throw new Error('Invalid observation');
        }
        var birdData = (_a = {},
            _a[birdName] = {
                dates: [date],
                averageCoordinates: coordinates
            },
            _a);
        return birdData;
    });
    return {}; // Tymczasowy zwracany typ
}
exports.processBirdObservations = processBirdObservations;
var data = processBirdObservations([
    { name: 'Kania', date: '2023-04-01', coordinates: { latitude: 50, longitude: 19 } },
    { name: 'Kania', date: '2023-04-02', coordinates: { latitude: 52, longitude: 21 } },
    { name: 'Sokół', date: '2023-04-01', coordinates: { latitude: 48, longitude: 17 } },
]);
// const expected = {
//     'Kania': {
//         dates: ['2023-04-01', '2023-04-02'],
//         averageCoordinates: { latitude: 51, longitude: 20 },
//     },
//     'Sokół': {
//         dates: ['2023-04-01'],
//         averageCoordinates: { latitude: 48, longitude: 17 },
//     },
// };
