// W ostatnim tygodniu przed Bożym Narodzeniem, Święty Mikołaj stanął przed niecodziennym wyzwaniem.
// Pomocnicy Mikołaja zgłosili, że w centralnym systemie zarządzania listami życzeń dzieci nastąpił
// ogromny wzrost ruchu. Na skutek tego, dostęp do bazy danych z życzeniami zagroził przeciążeniem systemu.
// Święty Mikołaj postanowił, że potrzebny jest algoritm limitowania ruchu do systemu, aby każde dziecko miało
// sprawiedliwą szansę na złożenie swojego zamówienia do Świętego. Algorytm miał gwarantować, że w określonej
// jednostce czasu, tylko pewna liczba prób dostępu będzie przetwarzana, a wszystkie nadmiarowe próby zostaną odrzucone l
// ub odłożone do późniejszego czasu. Właśnie ty, jako doświadczony inżynier oprogramowania, zostałeś poproszony,
// byś zaprojektował i wdrożył niezawodny system limitowania ruchu, który zadba o równowagę obciążenia w systemie.

export class RateLimiter {
    private maxRequests: number;
    private intervalMs: number;
    private requests: number = 0;
    
    constructor(maxRequests: number, intervalMs: number) {
        this.maxRequests = maxRequests;
        this.intervalMs = intervalMs;
    }
    
    attemptAccess(): boolean {
        this.addRequest();
        if (this.requests > this.maxRequests) {
            return false
        }
        return true
        
    }
    
    addRequest() {
        this.requests += 1;
        setTimeout(
            () => {
                this.requests -= 1
            }, this.intervalMs
        )
        
    }

}