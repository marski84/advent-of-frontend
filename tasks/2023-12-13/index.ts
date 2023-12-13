// Aplikacja do wymiany wiadomości, z której korzysta całe biuro Świętego Mikołaja,
//     ma jedną istotną wadę - nie zawsze aktualizuje się poprawnie. Kiedy pracownicy
// korzystają z różnych wersji aplikacji, mogą wysyłać i otrzymywać błędnie sformatowane wiadomości.
//     Tak przydarzyło się i tym razem, kiedy wiadomości od podróżującego Mikołaja zaczęły docierać do Elfów w nietypowym formacie.
//     Każda z nich składa się z dwóch fragmentów, które dodatkowo wyglądają na zaszyfrowane. Pomóż Elfom odczytać wiadomości
// i przywróć świąteczny porządek.



function rot13(str: string): string {
    return str.replace(/[A-Z]/gi, (c) => {
        let code = c.charCodeAt(0);
        let shift = (c <= 'Z' ? 90 : 122) >= (code + 13) ? code + 13 : code - 13;
        return String.fromCharCode(shift);
    });
}

function decode(value: string) {
    const cypher = value.split(':')[0];
    const valueToDecode = value.split(':')[1];
    
    switch (cypher) {
        case 'b64':
            return atob(valueToDecode)
            break;
        case 'c13':
            return rot13(valueToDecode)
        case 'uri':
            return decodeURIComponent(valueToDecode)

    }
}

export function decodeMessage(template: string, values: Record<string, string>): string {
    if (Object.keys(values).length === 0) {
        template = template.replace(/\{\{(.*?)\}\}/, '')
        console.log(template)
        return template
    }
    
    for (const key in values) {
        const value = values[key];
        const decoded = decode(value);
        if (decoded === undefined) {
            template = template.replace(`{{ ${key} }}`, '');
            continue;
        }
        template = template.replace(`{{ ${key} }}`, decoded);
        
    }
    return template;
}

