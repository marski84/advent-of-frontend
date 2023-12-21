// W ostatnim tygodniu przed świętami Mikołaj napotkał kolejny problem. W jego magicznej fabryce zabawek,
// maszyny zaczęły działać w nieprzewidywalny sposób, a informacje o prezentach były przesyłane w chaotycznej kolejności.
// Mikołaj potrzebował sposobu, aby zarządzać tym strumieniem informacji i je uporządkować. "Mapowanie, pomijanie i branie
// określonej liczby prezentów z listy - to by rozwiązało mój problem!" Czasu było niewiele, a wyzwanie wydawało się trudne.
// Czy ktoś mógłby mu pomóc zanim nadejdą święta?

export class GiftStream {
    private strings: string[] = [];
    processedStrings: string[][] = [];
    constructor(strings: string[]) {
        this.strings = strings
    }
    

    
    map(param: (value: any) => string[]) {
        this.processedStrings = this.strings.map(value =>param(value))
        return this;
    }
    
    skip(amount: number) {
       this.processedStrings = this.processedStrings.slice(amount)
        return this
    }
    
    
    take(amount: number) {
        this.processedStrings = this.processedStrings.slice(0, amount)
        return this
    
    }
    
    getGifts() {
        return this.processedStrings
    }
}


const stream = new GiftStream(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
const result = stream
    .map((value) => value.toUpperCase())
    .skip(3)
    .take(2)
    .getGifts();
// expect(result).toEqual(['D', 'E']);

