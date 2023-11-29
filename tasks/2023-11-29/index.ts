export function znajdzSciezke(labirynt: number[][]): number[][] {
    // Implementacja funkcji
    if (!labirynt) {
        throw new Error('Labirynt jest pusty');
    }
    
    const path: number[][] = [];
    const rows = labirynt.length;
    const cols = labirynt[0].length;
    
    function dfs(row: number, col: number): boolean {
        if (row < 0 || col < 0 || row >= rows || col >= cols || labirynt[row][col] === 0) {
            return false;
        }
        
        path.push([row, col]);
        labirynt[row][col] = 0; // Mark as visited
        
        if (row === rows - 1 && col === cols - 1) {
            return true; // Reached the destination
        }
        
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right, Down, Left, Up
        for (let i = 0; i < directions.length; i++) {
            const [dx, dy] = directions[i];
            if (dfs(row + dx, col + dy)) {
                return true;
            }
        }
        
        path.pop(); // Backtrack
        return false;
    }
    
    dfs(0, 0);
    return path;
}


const result = znajdzSciezke( [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 1],
]);

const result2 = znajdzSciezke( [
[1, 0, 0],
[0, 1, 0],
[0, 0, 1]
    ]
)

// console.log(result)


// it('Zwraca poprawną ścieżkę dla prostego labiryntu', () => {
//     const labirynt = [
//         [1, 1, 0],
//         [0, 1, 0],
//         [0, 1, 1]
//     ];
//     const oczekiwanaSciezka = [[0, 0], [0, 1], [1, 1], [2, 1], [2, 2]];
//     expect(znajdzSciezke(labirynt)).toEqual(oczekiwanaSciezka);