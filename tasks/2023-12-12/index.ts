// Jak co roku, w okresie świąt o działalności Świętego Mikołaja szeroko rozpisują
// się media. Dziennikarze chcą wiedzieć jak organizuje on swoją podróż, jakie są
// jego plany na przyszłość, a także co robi w wolnym czasie. Jako, że do świąt zostało już
// naprawdę niewiele czasu, Mikołaj zdecydował się na przeprowadzenie wywiadów o z góry
// ustalonych ramach czasowych. Niestety, nie każdy dziennikarz trzyma się ustalonych zasad.
// Mikołaj potrzebuje systemu, który pozwoli mu anulować przeciągające się rozmowy.

export async function conductInterviews(
    subjects: string[],
    interview: (subject: string) => Promise<string | unknown>,
    timeConstraint: number
) {
    if(!subjects || !interview || !timeConstraint) {
        throw new Error('No all neccesary data provided');
    }
    if(subjects.length === 0) {
        throw new Error('No subjects provided');
    }
    const results = await Promise.all(subjects.map(subject =>
        Promise.race([
            new Promise((resolve, reject) =>
                setTimeout(() => reject())
            ),
            interview(subject).catch(error => `Error: ${error.message}`)
        ])
    ));
    
    return results;
}


// const messages = ['Message1', 'Message2', 'Message3'];
// const processMessage = (message: string) => Promise.resolve(`Processed: ${message}`);
// const result = await conductInterviews(messages, processMessage, 100);
// console.log(result)
// expect(result).toEqual(['Processed: Message1', 'Processed: Message2', 'Processed: Message3']);
// expect(processMessage).toHaveBeenCalledTimes(3);
