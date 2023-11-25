export interface IPhonetic {
  text: string;
  audio: string;
}

export interface IMeaning {
  partOfSpeech: string;
  definitions: IDefenition[];
  synonyms: string[];
  antonyms: string[];
}

export interface IDefenition {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

export interface IWord {
  word: string;
  phonetics: IPhonetic[];
  meanings: IMeaning[];
}
