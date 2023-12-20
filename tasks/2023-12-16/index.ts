// Przed Mikołajem misja specjalna - musi on dostarczyć prezent, który został zamówiony w innym wymiarze.
// Aby dostarczyć tę szczególną paczkę, Święty musi wykonać kilka skoków w czasoprzestrzeni i wyszukać odpowiednią galaktykę,
// w której przedstawiciel obcej cywilizacji odbierze swój prezent. Aby zachować wysokie standardy bezpieczeństwa, elfy
// odpowiedzialne za info-sec zarekomendowały logowanie całej historii podróży Mikołaja, aby w razie potrzeby wyruszyć na
// misję poszukiwawczą. Czy jesteś w stanie utworzyć taki system bezpiecznej nawigacji?


type GalacticHistoryTracer<T> = {
    
    add(item: T): void;
    undo(): void;
    redo(): void;
    current(): T | null;
};

class GalaxyHistoryTracer<T> implements GalaxyHistoryTracer<T> {
    private traceList: T[] = [];
    private undoneList: T[] = [];

    add(item: T): void {
        if (!item) {
            throw new Error("No item provided!")
        }
        this.traceList.push(item)
        if (this.undoneList.length) {
            this.undoneList = [];
        }
    
    }
    undo(): void  {
        if (this.traceList.length === 0) {
            return
        }
        const lastItem = this.traceList.pop();
        this.undoneList.push(lastItem!);
    }
    redo(): void {
        if (!this.undoneList.length) {
            throw new Error('No more galaxies to explore');
        }
        const redoItem = this.undoneList.pop();
        this.traceList.push(redoItem!);
        
    }
    current(): T | null {
        if (!this.traceList.length) {
            return null;
        }
        return this.traceList[this.traceList.length - 1];
    }
}

export function createTracer<T>(): GalacticHistoryTracer<T> {
    return new GalaxyHistoryTracer<T>();
}
