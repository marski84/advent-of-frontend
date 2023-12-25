// Napięty grafik na kilka dni przed świętami powoduje mnóstwo stresu. Zespół elfów odpowiedzialny za produkcję
// zabawek nie radzi sobie z ilością pracy, więc część pracowników zaczyna omijać procesy i improwizować. Wszystko to
// powoduje, że jakość zabawek w tym kluczowym okresie spada. Mikołaj, aby zapobiec dalszemu pogorszeniu sytuacji,
// postanawia zatrudnić kogoś, kto rozwiązywał w przeszłości takie problemy. Nowy inżynier jakości postanawia wdrożyć
// politykę odwróconych zależności - zamiast pozwalać elfom tworzyć narzędzia i zabawki na własną rękę, będą oni korzystać z
// jednego wspólnego kontenera "dobrych praktyk i rekomendacji". Tylko w ten sposób można zapewnić, że wszystkie zabawki będą
// spełniać wymagania jakościowe.


export class InjectionToken<T> {
    constructor(readonly injectionIdentifier: string) {}
}

export class FactoryInjector {

    private registry = new Map();
    
    registerClass<T>(blueprint: new () => T) {
        if (!blueprint) {
            throw new Error("No blueprint provided!");
        }
        this.registry.set(blueprint, blueprint)
    }
    
    provideValue<T>(token: InjectionToken<T>, value: T) {
        if (!token) {
            throw new Error("No token provided!");
        }
        if (!value) {
            throw new Error("No value provided!");
        }
        this.registry.set(token.injectionIdentifier, value);
    }
    
    get<T>(injectedClassName: T): T {
        const valueOrBlueprint = this.registry
            .get(injectedClassName instanceof InjectionToken ? injectedClassName.injectionIdentifier : injectedClassName);
        const blueprint= this.registry.get(injectedClassName)
        
        if (!valueOrBlueprint) {
            throw new Error(`No value or blueprint found for ${injectedClassName}`);
        }
        
        if (typeof blueprint === 'function'){
            return new valueOrBlueprint()
        }
        return valueOrBlueprint
    }
    

}

const injector = new FactoryInjector();
class SnowboardBlueprint {
    brand = 'SnowX';
}
const TOKEN = new InjectionToken<string>('SPORT_GEAR');

// injector.registerClass(SnowboardBlueprint);
injector.provideValue(TOKEN, 'Gloves');



const value = injector.get(TOKEN);
// const a = injector.get(SnowboardBlueprint)
