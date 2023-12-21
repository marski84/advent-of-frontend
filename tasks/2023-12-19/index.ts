// W ostatnim tygodniu przed Świętami, Święty Mikołaj zmaga się z nowym wyzwaniem.
// Jego warsztat pełen jest prezentów gotowych do dostarczenia dzieciom na całym świecie.
// Jednak ilość prezentów jest tak ogromna, że zwykłe metody organizacji zawiodły. Elfowie,
// chcąc ułatwić Mikołajowi zadanie, zaproponowali stworzenie magicznego systemu paginacji prezentów.
// System ten miałby umożliwić Mikołajowi przeglądanie prezentów partiami, zamiast wszystkich na raz,
// co znacznie przyspieszyłoby proces wyboru prezentów do dostarczenia.

export function usePagination<T>(items: T[], itemsPerPage: number, pageNumber: number) {
    if (items.length === 0 || itemsPerPage <= 0 || pageNumber <= 0) {
        return {
            currentPageItems: [] as T[],
            totalPages: 0,
            totalItems: 0
        }
    }
    
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const totalItems = items.length;
    
    
    const currentPageItems = items.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage);
    return {
        currentPageItems: currentPageItems,
        totalPages,
        totalItems
    }
}


// expect(currentPageItems).toEqual(["gift1", "gift2"]);
usePagination(["gift1", "gift2", "gift3", "gift4"], 2, 2);
