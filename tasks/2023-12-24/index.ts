// Święta tuż tuż! Aby nie tracić czasu, cały zespół odpowiedzialny za dostarczanie prezentów rozpoczął
// prace nad nowym systemem, który pozwoli na szybsze wdrażanie prezentów w kolejnym roku. Mikołaj wiedział,
// że potrzebuje nowego, bardziej elastycznego rozwiązania, które pozwoli na szybkie aktualizowanie stanu listy i
// jej szablonu, bez konieczności oczekiwania na pomoc elfów-programistów. Ponadto, chciał, aby nowy system był łatwy w
// obsłudze i pozwalał na dodawanie stylów, które będą odzwierciedlone w szablonie. Mikołaj zwrócił się więc z prośbą do
// ciebie, abyś podjął to wyzwanie i stworzył podstawy nowoczesnego front-endowego frameworka, który pomoże w zarządzaniu
// listą prezentów na rok 2024!

abstract class Component {

    readonly style: string | null = null;
    state: any;
    
    constructor(initialState?: any  , style?: string) {
        if (initialState) {
            this.state = initialState
        }
        if (style){
            this.style = style
        }
    }
    
    

    setState(componentState: any) {
        this.state = componentState
    }
    
    template(): string {
        return ''
    }
}

function renderComponent(component: Component): string {
    return component.template();

}

export { Component, renderComponent };



