export interface Word {
    word: string;
    phonetics: {
        audio: string;
        text: string;
    },
    meanings: {
        partOfSpeach: string;
        definitions: string;
    }
}