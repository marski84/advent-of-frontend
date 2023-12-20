// Na czas nieobecności Świętego Mikołaja zespół elfów-programistów eksperymentuje z nowościami,
// jakie zostaną wdrożone w przyszłym roku do procesu przygotowywania prezentów. Jednym z pomysłów jest
// zbudowanie nowego języka opisu prezentów, który będzie bardziej czytelny dla każdego pracownika fabryki.
// Powstaje prototyp języka GSL (GiftStylingLanguage), którego pierwsze polecenia wyglądają naprawdę obiecująco.
// Problem w tym, że nikt nie potrafi ich przetłumaczyć na wykonywalny kod, a system do obsługi prezentów nie jest w
// stanie ich zinterpretować. Czy uda się zbudować funkcję do obsługi języka GSL, która będzie zwracać poprawnie
// sformatowany opis prezentu?

export interface Gift{
    ribbon: string;
    label: string;
    items: any[];
}

export interface Wearable{
    type: string;
    color?: string;
    size?: string;
    pattern?: string;
}

export interface Literary{
    type: string;
    size?: string;
    title?: string;
    author?: string;
}

export const GSL_DEMO_SNIPPET = `
Gift(ribbon: "gold curly", label: "Merry Christmas!") {
    Wearable(type: "socks", size: "small", color: "red").if(winterSeason: true) {
      pattern: "snowflakes"
    }

    Wearable(type: "scarf", size: "medium", color: "green") {
      pattern: "snowflakes"
    }

    Literary(type: "book", size: "15cm 22cm 2cm", title: "Christmas Stories", author: "C. Claus")
}
`;



export class Wearable implements Wearable {
    constructor(type: string, size: string, color: string) {
        this.type = type;
        this.size = size;
        this.color = color
    }
    
    get props(){
        return [this.type, this.size,this.color]
    }
}

 export class Literary implements Literary {
     constructor(type: string, size: string, title: string, author: string) {
         console.log(type, size, title, author)
         this.type = type;
         this.size = size
         this.title = title;
         this.author = author
     }
     
     get props(){
         return [this.type, this.size,this.title, this.author]
     }
}

function createDto(str: string): any {
    const type = str.split('(')[0];
    const data = str.split('(')[1].replace(')', '')
        .match(/"(.*?)"/g)!
        .map(x => x.replace(/"/g, ''))
    // console.log(type, data)
    if(type === 'Wearable') {
        const type =data[0];
        const size = data[1];
        const color = data[2];
        return new Wearable(type, size, color);
    }
    if (type === 'Literary') {
        const type = data[0];
        const size = data[1];
        const title = data[2];
        const author = data[3];
        return new Literary(type, size, title, author);
    }

    

}
export function parseGSL(gslScript: string): Gift {
    const parsed = (gslScript.split('\n'));
    const result: (Wearable | undefined)[] =[]
    
    const giftMatch = gslScript.match(/Gift\(ribbon: "(.*?)", label: "(.*?)"\)/);
    const itemsMatch = gslScript.match(/(\w+)\(type: "(.*?)", size: "(.*?)"\)/g);
    

    
    if (itemsMatch) {
        itemsMatch.forEach(item => result.push(createDto(item)))
    }
    
    
    
    
    
    
    // console.log(giftMatch![3]);
    
    return {
        ribbon: giftMatch![1],
        label: giftMatch![2],
        items: result,
    }
}


