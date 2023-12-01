interface Mineral {
    value: number;
    mass: number;
}

export function optimizeLoad(minerals: Mineral[], maxMass: number): Mineral[] {
        let optimizedLoad: Mineral[] = [];
        let loadMass = 0;
    
    const filteredMinerals = minerals.filter(mineral => mineral.mass <= maxMass)
    
    const values =filteredMinerals.map(mineral => mineral.value);
        const maxValue = Math.max(...values);
        const maxValueIndex = filteredMinerals.findIndex(mineral => mineral.value === maxValue);
        
        const maxValueMineral = filteredMinerals[maxValueIndex]
        optimizedLoad.push(maxValueMineral);
        
    const notMaxValueMinerals = filteredMinerals.
    filter(mineral => mineral !== maxValueMineral);
    
    loadMass += maxValueMineral.mass;
    
    notMaxValueMinerals.forEach((mineral , index) => {
         if(loadMass < maxMass && loadMass + mineral.mass <= maxMass){
             optimizedLoad.push(mineral);
             loadMass += mineral.mass;
         }
        });
    return optimizedLoad;
}


    // const minerals = [
    // { value: 10, mass: 5 },
    // { value: 40, mass: 25 },
    // { value: 30, mass: 20 }
    // ];
    // const maxMass = 30;

const minerals = [
    { value: 10, mass: 5 },
    { value: 20, mass: 10 },
    { value: 15, mass: 8 }
];
const maxMass = 50;
optimizeLoad(minerals, maxMass)