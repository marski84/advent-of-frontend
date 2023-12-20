// Na kilka dni przed świętami, Mikołaj przygotowywał się do doręczenia prezentów dzieciom na całym świecie.
// Jego worki były pełne różnorodnych upominków, a każdy z nich miał określoną wartość, wagę i objętość.
// Mikołaj chciał zmaksymalizować wartość dostarczonych prezentów, ale jednocześnie musiał przestrzegać limitów wagowych
// i pojemności swoich sań. Wiedząc, że to zadanie wymaga nie tylko magii, ale i algorytmicznego podejścia, postanowił poprosić
// o pomoc elfa-programistę, który zna się na programowaniu dynamicznym.

export type Gift = {
    value: number;
    weight: number;
    volume: number;
};


const gifts = [
    { value: 4, weight: 12, volume: 4 },
    { value: 2, weight: 1, volume: 2 },
    { value: 6, weight: 4, volume: 6 },
    { value: 1, weight: 1, volume: 1 },
    { value: 10, weight: 10, volume: 12 }
];
const maxWeight = 15;
const maxVolume = 15;

export function calculateMaxGiftValue(gifts: Gift[], maxWeight: number, maxVolume: number): number {
    if (gifts.length === 0) {
        return 0
    }
    
    const sortedGifts = gifts.sort((a, b) => b.value - a.value);
    console.log(sortedGifts)
    let currentWeight = 0;
    let currentVolume = 0;
    let resultValue = 0;
    sortedGifts.forEach(gift => {
        if (currentWeight + gift.weight <= maxWeight && currentVolume + gift.volume <= maxVolume) {
            currentWeight += gift.weight;
            currentVolume += gift.volume;
            resultValue += gift.value;
        }
    });
    
    return resultValue
}



