// Trudne warunki pogodowe sprawiły, że Święty Mikołaj pogubił niektóre z prezentów przewożonych na saniach.
// Przy pierwszej możliwej okazji skontaktował się z Elfami przekazując im listę brakujących prezentów nalegając o jak
// najszybsze dostarczenie zapasowych odpowiedników. Niestety, wersje zapasowe przechowywane są w ścieśle strzeżonym magazynie,
// którego system skrytek komplikuje dostęp do przedmiotów. Elfy muszą wykonać zapytanie do systemu, które zwróci im numery
// skrytek umożliwiających zbudowanie awaryjnego zestawu prezentów. Jak to zrobić, kiedy wszyscy działają pod presją czasu a z
// magazynu zapasowego od dawna nie korzystano?


export function* storageQuery(range: number, gift: string, resolver: (n: number, gift: string) => boolean): Generator<number> {
    let iterationCount = 0;
    switch (gift) {
        case 'hat':
            iterationCount = 3
            break
        case 'smartphone':
            iterationCount = 10
            break
        case 'book':
            iterationCount = 4
    }
    
    let state = storageResolver(iterationCount, gift)
    
    for (let i = iterationCount; state; i += iterationCount) {
        if (i > range) break
        state= storageResolver(i, gift)
        yield i
    }
}
export function storageResolver(n: number, gift: string): boolean {
    switch (gift) {
        case 'hat':
            return !(n % 3 !== 0)
        case 'smartphone':
            return !(n % 10 !== 0)
        case 'book':
            return !(n % 4 !== 0)
        case 'console':
            return false
        default:
            return false
        
    }
   }


