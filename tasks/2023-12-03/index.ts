// Mikołaj ma problem: w czasie podróży przez czasoprzestrzeń zgubił worek z prezentami!
// Teraz musi szybko wyznaczyć, w którym punkcie czterowymiarowego kontinuum (x, y, z, czas)
// worek się znajduje. Twoim zadaniem jest napisanie funkcji 'znajdzWorek', która przyjmie jako
// parametry listę potencjalnych lokalizacji oraz obliczoną przez elfów 'mapę czasoprzestrzenną' w
// postaci matematycznej funkcji f(x, y, z, czas). Funkcja 'znajdzWorek' powinna zwrócić lokalizację worka,
// dla której wartość mapy jest najwyższa. Lokalizacje są obiektami z właściwościami x, y, z, czas, a
// mapa czasoprzestrzenna jest funkcją przyjmującą te cztery współrzędne i zwracającą wartość liczbową.
// Pamiętaj o obsłudze przypadków, gdy mapa nie zwróci żadnej wartości lub
// zwróci wartości niepoprawne matematycznie (np. NaN, Infinity).
// const lokalizacje: Lokalizacja[] = [
//     { x: 1, y: 2, z: 3, czas: 4 },
//     { x: 5, y: 6, z: 7, czas: 8 },
//     { x: 9, y: 10, z: 11, czas: 12 },
// ];

export interface Lokalizacja {
    x: number;
    y: number;
    z: number;
    czas: number;
}

export interface MapaCzasoprzestrzenna {
    (x: number, y: number, z: number, czas: number): number;
}

export function znajdzWorek(lokalizacje: Lokalizacja[], mapa: MapaCzasoprzestrzenna): Lokalizacja | null {

    if (lokalizacje.length === 0) {
        return null
    }
    
    const values = lokalizacje
        .map(lokalizacja => {
        const result =
            {
                lokalizacja: lokalizacja,
                 score: mapa(lokalizacja.x, lokalizacja.y, lokalizacja.z, lokalizacja.czas)
        }
        
        return result
            })
        .filter(lokalizacja => lokalizacja.score > 0)
        .sort((a, b) => b.score - a.score);
    
    console.log(values)
    
    if (values.length > 0) {
        return values[0].lokalizacja
    } else {
        return null
    }
}

// const lokalizacje: Lokalizacja[] = [
//     { x: 1, y: 2, z: 3, czas: 4 },
//     { x: 5, y: 6, z: 7, czas: 8 },
//     { x: 9, y: 10, z: 11, czas: 12 }
// ]




const lokalizacje: Lokalizacja[] = [
    { x: -1, y: -2, z: -3, czas: -4 },
    { x: 0, y: 0, z: 0, czas: 0 },
];const mapa: MapaCzasoprzestrzenna = (x: any, y: any, z: any, czas: any) => x + y + z + czas;

const result = znajdzWorek(
    lokalizacje,
    mapa
);

console.log(result)