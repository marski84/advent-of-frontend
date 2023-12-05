// Zespół Świętego Mikołaja napotkał niezwykłe wyzwanie. Otóż, jedna z maszyn w pracowni,
// odpowiedzialna za koordynowanie pracy elfów i rozdział prezentów, przestała działać.
// Ta maszyna to nic innego jak zaawansowany system zdarzeń, który informuje elfy o zmianach
// w liście prezentów i priorytetach dostaw. W związku z tym, Mikołaj musi szybko znaleźć sposób
// na naprawę systemu zdarzeń, aby wszystko wróciło do normy i prezenty zostały dostarczone na czas.
// Programiści będą musieli napisać nową implementację
// mechanizmu emitującego zdarzenia aby system do obsługi prezentów zaczął działać poprawnie.

export class ChristmasEmitter {

    queue: {[key: string]: Function[]} = {};
    
    on(key: string, callback: () => {}) {
        if (!this.queue[key]) {
            this.queue[key] = [];
        }
        this.queue[key].push(callback);
        console.log(this.queue)
    }
    
    off(key: string, callback: () => {}) {
        if (!this.queue[key]) {
            throw new Error('No subscribers found')
        }
        
        this.queue[key] = this.queue[key].filter(queueItem => queueItem !== callback)
    }
    
    emit(key: string) {
        if(!this.queue[key]) {
            throw new Error('No subscribers for the event')
            }
 
        this.queue[key].forEach((callback) => {
           return callback()
        })
        console.log('ok')
        
    }
}

const emitter = new ChristmasEmitter();
const firstMockCallback = () => true;
const secondMockCallback = () => false;

// emitter.on('gift', firstMockCallback);
// emitter.on('letter', secondMockCallback);
// console.log(emitter.emit('gift'));
// emitter.emit('gift');

emitter.on('letter', firstMockCallback);
emitter.off('letter', firstMockCallback);
emitter.emit('letter');