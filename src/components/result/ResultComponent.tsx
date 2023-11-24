import { Word } from '../../types';
import { ResultContainer, WordCard } from './styles';

interface IResultComponent {
  result: Word[] | null;
}

export const ResultComponent = ({ result }: IResultComponent) => {
  return (
    <ResultContainer>
      {result?.map((word: Word, index: number) => (
        <WordCard key={index}>
            {word.word}
        </WordCard>
      ))}
    </ResultContainer>
  );
};
