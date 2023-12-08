// Pewna grupa elfów z zespołu Świętego Mikołaja zajmuje się sortowaniem listów.
// Niestety, wymagania związane z sortowaniem zmieniają się każdego dnia, a system
// do obsługi sortowania nie jest wystarczająco elastyczny. Zaproponuj rozwiązanie,
// które pozwoli na łatwe dodawanie nowych strategii sortowania w zależności od parametrów
// stakich jak kraj pochodzenia listu, priorytet, jego długość, albo zawartość.

export interface Letter {
    content: string;
    country: 'pl' | 'de' | 'us';
    priority: 'high' | 'medium' | 'low';
}

interface SortStrategy {
    sortLetters: (letters: Letter[]) => Letter[]
}

export class PriorityStrategy implements SortStrategy{
    sortLetters(letters: Letter[]): Letter[] {
        const priorityMap = {
            high: 3,
            medium: 2,
            low: 1
        };
        
        const sorted = letters
            .sort((a, b) => priorityMap[b.priority] - priorityMap[a.priority]);
        return sorted;
        
    }


}

export class CountryStrategy implements SortStrategy{
    sortLetters(letters: Letter[]): Letter[] {
        const sorted = letters.sort((a, b) => {
            if (a.country < b.country) {
                return -1
            }
            if (a.country > b.country) {
                return 1
            }
            return 0
        })
        return sorted;
    }
    
    
}

export class LengthStrategy implements SortStrategy{
    sortLetters(letters: Letter[]): Letter[] {
        const sorted = letters.sort((a, b) => {
            if (a.content.length < b.content.length) {
                return -1
            }
            if (a.content.length > b.content.length) {
                return 1
            }
            return 0
        })
        return sorted;
    }
    
    
}




export class LetterSorter {
    private strategy: SortStrategy;
    
    constructor(sortStrategy: SortStrategy) {
        this.strategy = sortStrategy;
    
    }
    sortLetters(data: Letter[]): Letter[] {
        
        const result =this.strategy.sortLetters(data);
        return result;
        
    }
}
const letters: Letter[] = [
    { content: 'Hi', country: 'us', priority: 'medium' },
    { content: 'Halo', country: 'de', priority: 'low' },
    { content: 'Cześć', country: 'pl', priority: 'high' }
];
const letterSorter = new LetterSorter(new PriorityStrategy());
// const letterSorter = new LetterSorter(new CountryStrategy());
// const letterSorter = new LetterSorter(new LengthStrategy());
const result =letterSorter.sortLetters(letters)
console.log(result)
