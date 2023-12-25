// W noc przed Wigilią, Święty Mikołaj zorientował się, że ma problem z weryfikacją listów od dzieci.
// Każdy list jest w formacie JSON i musi spełniać różne schematy w zależności od kraju pochodzenia.
// Mikołaj postanowił, że potrzebuje systemu do dynamicznego generowania schematów weryfikacji, który
// będzie elastyczny i pozwoli na szybkie dostosowywanie do różnorodnych wymagań. System ten musi być
// gotowy w ciągu dwóch dni, aby Mikołaj mógł sprawdzić wszystkie listy przed rozdaniem prezentów.
// Zadanie polega na stworzeniu generatora schematów w TypeScript, który pozwoli Mikołajowi na sprawne
// zarządzanie listami i zapewnienie, że żadne dziecko nie zostanie pominięte.


export type JsonSchema = {
    type: string;
    properties?: Record<string, JsonSchema>;
    required?: string[];
    items?: JsonSchema;
    nullable?: boolean;
};

export const generateSchema = (schemaDefinition: JsonSchema): JsonSchema => {
    return schemaDefinition;
};

const hasRequiredProperties = (requiredProperties: string[], propertiesToValidate: Record<string, JsonSchema>) => {
    const propertiesKeys = Object.keys(propertiesToValidate);
    let isValid: boolean[] = [];
    requiredProperties.forEach(requiredProperty => {
       const isPresent = propertiesKeys.some(property => property === requiredProperty);
       isValid.push(isPresent)
    })
    return isValid.every(isPresent => isPresent);
}

export const validate = (schema: JsonSchema, jsonObject: any): boolean => {
    const requiredProperties = schema.required || [];
    const propertiesToValidate = schema.properties || {};
    
    const hasValidProperties = hasRequiredProperties(requiredProperties, jsonObject);
    if (!hasValidProperties) {
        return false;
    }
    return true;
};

const schema = generateSchema({
    type: "object",
    properties: {
        name: { type: "string" },
        age: { type: "number" },
        wishlist: { type: "array", items: { type: "string" } }
    },
    required: ["name", "age", "wishlist"]
});

const validObject = {
    name: "Alice",
    age: 10,
    wishlist: ["Doll", "Book", "Puzzle"]
};

const invalidObject = {
    name: "Bob",
    wishlist: ["Train", "Ball"]
};

// const result = validate(schema, invalidObject);
// console.log(result)