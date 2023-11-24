import { IResultComponent, IWord } from '../..';
import { CardHeader } from './components';
import { ResultContainer, WordCard } from './styles';

export const ResultComponent = ({ result }: IResultComponent) => {
  return (
    <ResultContainer>
      {result?.map((word: IWord, index: number) => (
        <WordCard key={index}>
          <CardHeader word={word} />
        </WordCard>
      ))}
    </ResultContainer>
  );
};
