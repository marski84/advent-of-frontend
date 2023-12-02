// Święty Mikołaj ma problem. Jego renifery zauważyły, że listy od dzieci
// z całego świata nie są odpowiednio sortowane. Listy powinny być uporządkowane
// według priorytetu, który jest wyrażony liczbą -
// im wyższa liczba, tym wyższy priorytet.
// Mikołaj potrzebuje systemu, który pomoże mu szybko i efektywnie organizować listy, aby
// żadne życzenie nie zostało pominięte. Renifery są ekspertami od logistyki, a nie od struktur danych,
// więc Mikołaj zwraca się o pomoc do programistów. Czy jesteś w stanie stworzyć dla
// niego odpowiednią strukturę danych, która pomoże mu w sortowaniu listów?
//     Czas ucieka!

interface QueueItem<T> {
    itemName: T;
    priority: number;
}




export class ChristmasQueue<T> {
    
    queue: QueueItem<T>[] = [];
    
    enqueue(itemName:T, priority: number): void {
        if (!itemName || !priority) {
            throw new Error('There are no letters in the queue!');
        }
        
        this.queue.push({ itemName, priority });
        this.queue.sort((a, b) => b.priority - a.priority);
    
    }
    
    dequeue(): T {
        if (this.queue.length === 0) {
            throw new Error('There are no letters in the queue!');
        }
        
        const item = this.queue.splice(0, 1)[0].itemName;
        return item;
    }
    
    isEmpty(): boolean {
        return this.queue.length === 0
    }

}


// const pq = new ChristmasQueue();
// pq.enqueue('lowPriority', 1);
// pq.enqueue('highPriority', 3);
// pq.enqueue('mediumPriority', 2);
// pq.enqueue('highPriority', 3);
// pq.enqueue('lowPriority', 1);
//
// pq.dequeue()