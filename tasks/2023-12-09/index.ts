// Mikołaj dokonuje ostatniego przeglądu ekwipunku, który pozwoli mu przebyć świąteczną podróż.
// W tym celu podążą za ściśle określonym protokołem, według którego każdy zabierany w podróż sprzęt
// zostanie sprawdzony pod kątem włączenia, wymiany i usunięcia z sań. Niestety, czas nagli,
// a Mikołaj nie jest pewien, czy uda mu się wykonać wszystkie operacje na czas.
// Czy możesz zautomatyzować proces weryfikacji ekwipunku?


export interface Tool {
    init(): void;
    update(): void;
    dispose(): void;

}

export class Equipment {
    private tools: Tool[] = [];
    toolsInitialized =false
    
    registerTools(tool: Tool) {
        if (!tool) {
            throw new Error('No tool provided!')
        }
        this.tools.push(tool)
    }
    
    initializeTools() {
        if(this.tools.length ===0 ){
            throw new Error('No tools registered!')
        }
        
        this.tools.forEach(tool => tool.init())
        this.toolsInitialized = true;
    }
    
    updateTools() {
        if(this.tools.length ===0 || !this.toolsInitialized){
            throw new Error('Cannot update any tools before initialization.')
        }
        
        this.tools.forEach(tool => tool.update())
    }
    
    disposeTools(){
        if(this.tools.length ===0 || !this.toolsInitialized){
            throw new Error('No tools registered!')
        }
        
        this.tools.forEach(tool => tool.dispose())
    }
}


const eq = new Equipment();
// const mockTool = { init: jest.fn(), update: jest.fn(), dispose: jest.fn() };
const tool: Tool = {
    init: () => {
        console.log('init')},
    update: () => {
            console.log('update')},
    dispose: () => {
        console.log('dispose')},
    
}

eq.registerTools(tool);
eq.initializeTools();
eq.updateTools();
eq.disposeTools();
