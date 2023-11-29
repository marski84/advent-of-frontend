// Tutaj skopiuj kod zadania
export function calculateTilesNeeded(sections: Array<{ width: number; height: number; }>): number {
    let totalTiles = 0;
    // Twoja implementacja
    sections.forEach(section => {
        totalTiles += section.width * section.height
    });
    return totalTiles;
}