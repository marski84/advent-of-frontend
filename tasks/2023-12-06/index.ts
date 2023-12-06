// TPo naprawie systemu zdarzeń zespół elfów zaczął uzyskiwać informacje
// o nowych zamówieniach, ale część maszyn na produkcji nadal produkowała zabawki, które nie były
// już potrzebne. Każdorazowa zmiana zamówienia wymagała ręcznej rekonfiguracji maszyn, co było bardzo
// czasochłonne.
// Mikołaj postanowił zatrudnić Ciebie, abyś pomógł mu wdrożyć bardziej scentralizowany
// system zarządzania produkcją. Powinien on na bieżąco informować wszystkie maszyny o zmianach w
// zamówieniach, a także przekazywać im informacje o tym, jakie zabawki mają produkować.
// Tylko jak to zrobić, kiedy maszyny nie są ze sobą połączone?


export class OrderController {
    
    machines: Machine[] = []
    
    registerMachine(machine: Machine) {
        if (!machine) {
            throw new Error("No machine id provided")
        }
        
        this.machines.push(machine);
    }
    
    unregisterMachine(machine: Machine) {
        console.log(machine)
        if (!machine) {
            throw new Error("No machine id provided")
        }
        
        const machineIndex = this.machines.indexOf(machine);
        if (machineIndex === -1) {
            throw new Error("Machine not found")
        }
        
        this.machines.splice(machineIndex, 1);
        
    }
    
    setState(state: string) {
        if (!state) {
            throw new Error("No state provided")
        }
        
        if (this.machines.length === 0) {
            throw new Error("Invalid state provided")
        }

        this.machines.forEach((machine) => {
            machine.previousStateData.push(state)
            machine.state = state
        })

    }
    
    
    
}

export class Machine {

id = Math.random().toString(36).substr(2, 9);
    state: string | null = null;
    previousStateData: string[] =[];
    
    performAudit() {
        let result: string[] = [];
        this.previousStateData.forEach((state, index) => {
            result.push(`Order #${index + 1} - ${state}`)
        }
        )
     return result
    }
}



const controller = new OrderController();
const machineA = new Machine();
const machineB = new Machine();

controller.registerMachine(machineA);
controller.registerMachine(machineB);
