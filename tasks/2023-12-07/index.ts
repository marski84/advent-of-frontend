// W zespole Świętego Mikołaja zapanował chaos. Chmurowy system do zamawiania prezentów obsługuje
// teraz konta rodzinne, dzięki czemu zarówno rodzice jak i dzieci mogą bez końca edytować te same
// listy. W efekcie tych zmian, zarówno Mikołaj jak i jego elfy gubią się w tym, co dzieci naprawdę
// chcą dostać. Na naradzie kryzysowej pojawił się pomysł nowego modelu danych, który pozwoliłby na
// śledzenie zmian w życzeniach dzieci. Niestety, elfy nie wiedza jak wdrożyć taki system w
// istniejącym kodzie. Pomóż im!




type Letter = { [key: string]: number };

export function createTrackedLetter(
    letter: { [key: string]: number },
    changeTracker: (key: string, value: number) => void
) {
    return new Proxy(letter, {
        set: function(target: { [key: string]: number }, key: string, value) {
            if (target[key] !== value) {
                target[key] = value;
                changeTracker(key, value);
            }
            return true;
        }
    });
}


const letter: { [key:string]: number } = {};
const changeTracker = ()=> {}
const trackedLetter = createTrackedLetter(letter, changeTracker);

trackedLetter.snowboards = 2;
// expect(changeTracker).toHaveBeenCalledWith('snowboards', 2);
console.log(trackedLetter)

trackedLetter.snowboards = 0;
// expect(changeTracker).toHaveBeenCalledWith('snowboards', 0);

