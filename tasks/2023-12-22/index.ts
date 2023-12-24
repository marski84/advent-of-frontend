// W fabryce Mikołaja jeden z zespołów zajmuje się tłumaczeniem listów nadchodzacych z całego świata.
// Jest to przydatne szczególnie wtedy, kiedy okresowo zmienia się slang, zestaw emoji lub format tekstu,
// którego Mikołaj nie do końca rozumie. Niestety, w tym roku poziom skomplikowania listów jest tak duży, że
// zespół nie nadąża z ich formatowaniem. Mikołaj potrzebuje Twojej pomocy! Czy jesteś w stanie napisać nowy,
// modularny procesor tekstu, który będzie od teraz otwarty na rozszerzenia i gotowy na przyszłe warianty listów od dzieci?

export interface TextProcessingPlugin {
 processWord(arg0: string): string
}

export class TextProcessor {
    
    plugins: TextProcessingPlugin[] = [];

    
    process(input: string) {
        if (this.plugins.length === 0 || input === '') {
            return input
        }
        let result: string ='';
        this.plugins.forEach((plugin, index) => {
            if (index === 0) {
                result = plugin.processWord(input)
            }
            else {
                result = plugin.processWord(result)
                
            }
        });
        return result
    }
    
    use(plugin: TextProcessingPlugin) {
        if (!plugin) {
            throw new Error("No plugin provided!");
        }
        
        this.plugins.push(plugin)
    }
    
}

export class RemoveWordsPlugin implements TextProcessingPlugin {
    words: string[];
    
    constructor(words: string[]) {
        this.words = words;
    }
    processWord(input: string) {
        let processedWord = '';
        this.words.forEach((word, index) => {
            if (index === 0) {
                processedWord = input.replace(word, '')
            }
            else {
                processedWord = processedWord.replace(word, '')
            }
        })
        
        return processedWord
    }
}

export class ReplaceCharsPlugin implements TextProcessingPlugin {
    params: Record<string, string>;
    constructor(param: { [key: string]: string; }) {
        this.params = param
    }
    processWord(word: string): string {
        let processedWord = word;
        Object.entries(this.params).forEach(([key, value]) => {
            processedWord.split('').forEach(letter =>{
                if(letter === key) {
                    processedWord = processedWord.replace(letter, value)
                }
            })
        })
        return processedWord;
    }
    
}

export class MarkdownToHtmlPlugin implements TextProcessingPlugin {
    
    processWord(word: string): string {
        const firstIndex = word.indexOf('**');
        const lastIndex = word[word.length- 2];
        let processedWord = word.replace('**', '<strong>');
        processedWord = processedWord.replace('**', '</strong>');
        return processedWord
    }
}

const textProcessor = new TextProcessor();
textProcessor.use(new RemoveWordsPlugin(['naughty', 'coal']));
textProcessor.use(new ReplaceCharsPlugin({ 'o': '0', 'l': '1' }));
textProcessor.use(new MarkdownToHtmlPlugin())


const inputText = 'A naughty child will receive coal. **Merry Christmas!**';
// const expectedOutput = 'A chi1d wi11 receive . <strong>Merry Christmas!</strong>';

const result = textProcessor.process(inputText)
// console.log(result)