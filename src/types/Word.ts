export interface IPhonetic {
  text: string;
  audio: string;
}

export interface IMeaning {
  partOfSpeach: string;
  definition: IDefenition[];
}

export interface IDefenition {
  text: string;
}

export interface IWord {
  word: string;
  phonetics: IPhonetic[];
  meanings: IMeaning[];
}
