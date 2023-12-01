interface Mineral {
    value: number;
    mass: number;
}

export function optimizeLoad(minerals: Mineral[], maxMass: number): Mineral[] {
    let optimizedLoad: Mineral[] = [];
    let loadMass = 0;
    
    // Sortuj minerały według wartości, od największej do najmniejszej.
    const sortedMinerals = [...minerals].sort((a, b) => b.value - a.value);
    
    for (const mineral of sortedMinerals) {
        // Jeśli dodanie minerału nie przekroczy maksymalnej masy, dodaj go do ładunku.
        if (loadMass + mineral.mass <= maxMass) {
            optimizedLoad.push(mineral);
            loadMass += mineral.mass;
        }
    }
    
    return optimizedLoad;
}