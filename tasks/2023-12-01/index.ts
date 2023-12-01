// W pierwszych dniach okresu przedświątecznego, Święty Mikołaj napotkał na
// nieoczekiwane wyzwanie. Jego główny komputer, który przechowuje listę prezentów dla
//dzieci na całym świecie, uległ awarii. Na szczęście dane nie zostały utracone, ale
// zostały całkowicie pomieszane. Każde dziecko ma przypisane ID i listę prezentów, które chciałoby
// otrzymać, ale teraz wszystko jest w nieładzie. Mikołaj musi szybko uporządkować te informacje, aby
// zapewnić, że każde dziecko otrzyma właściwe prezenty na czas. Mikołaj potrzebuje systemu, który pomoże
// mu zorganizować listę prezentów. Każdy prezent ma unikalny identyfikator i należy do konkretnego dziecka.
// Twoim zadaniem jest stworzenie struktury danych, która pozwoli Mikołajowi szybko odnaleźć wszystkie
// prezenty należące do danego dziecka oraz umożliwi łatwe dodawanie i usuwanie prezentów z listy.
// Pomóż Mikołajowi i zaprojektuj wydajną strukturę danych, która rozwiąże jego problem przed świętami!
interface Gift {
    id: number
    giftName: string
}

export class GiftRegistry {
    private giftList: Gift[] = []
    
    addGift(id: number, giftName: string) {
        if (!id || !giftName) return
        this.giftList.push({id, giftName});
    }
    
    removeGift(id: number, giftName: string) {
        if (!id || !giftName) return
        
        
        
        const giftIndex = this.giftList.findIndex(gift => gift.id === id && gift.giftName === giftName);
        
        if (giftIndex === -1) {
            throw new Error('Gift not found');
        }
            
        
        this.giftList.splice(giftIndex, 1);
    }
    
    getGiftsForChild(id: number) {
        if (!id) return
        
        return this.giftList
            .filter(gift => gift.id === id)
            .map(gift => gift.giftName);
    }
}

// const registry = new GiftRegistry();
//
// registry.addGift(1, 'teddy bear');
// registry.removeGift(1, 'puzzle')