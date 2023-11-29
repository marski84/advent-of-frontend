export type BirdObservation = {
    name: string;
    date: string; // YYYY-MM-DD
    coordinates: { latitude: number; longitude: number; };
};

export type ProcessedBirdData = {
    [birdName: string]: {
        dates: string[];
        averageCoordinates: { latitude: number; longitude: number; };
    };
};

export function processBirdObservations(observations: BirdObservation[]): ProcessedBirdData {
    // Twoja implementacja tutaj
    let result : {[key: string]: any} = {};
    
    observations.forEach(observation => {
        const birdName = observation.name;
        const date = observation.date;
        const coordinates = observation.coordinates;
        
        if (!birdName || !date || !coordinates) {
            throw new Error('Invalid observation');
        }
    //     const birdData: ProcessedBirdData = {
    //         [birdName]: {
    //             dates: [date],
    //             averageCoordinates: coordinates
    //         }
    //     }
    //
    //     if (result.hasOwnProperty(birdName)) {
    //         result[birdName].dates.push(date);
    //         result[birdName].averageCoordinates = {
    //             latitude: (result[birdName].averageCoordinates.latitude + coordinates.latitude) / 2,
    //             longitude: (result[birdName].averageCoordinates.longitude + coordinates.longitude) / 2
    //         }
    //     }
    //     else {
    //         result = {...result, ...birdData};
    //     }
    // })
        if (!result[birdName]) {
            result[birdName] = {
                dates: [],
                averageCoordinates: { latitude: 0, longitude: 0 },
                count: 0
            };
        }
        
        result[birdName].dates.push(date);
        result[birdName].count += 1;
        result[birdName].averageCoordinates.latitude += (coordinates.latitude
                - result[birdName].averageCoordinates.latitude)
            / result[birdName].count;
        result[birdName].averageCoordinates.longitude += (coordinates.longitude
            - result[birdName].averageCoordinates.longitude)
            / result[birdName].count;
    });
    
    // Usuń liczniki z wynikowego obiektu
    Object.values(result).forEach((birdData: any) => {
        delete birdData.count;
    });

    return result;
}

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


const data = processBirdObservations([
    { name: 'Kania', date: '2023-04-01', coordinates: { latitude: 50, longitude: 19 } },
    { name: 'Kania', date: '2023-04-02', coordinates: { latitude: 52, longitude: 21 } },
    { name: 'Sokol', date: '2023-04-01', coordinates: { latitude: 48, longitude: 17 } },
])

console.log(data)



