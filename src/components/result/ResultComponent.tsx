import { IResultComponent } from '.';
import { IWord } from '../..';
import { CardBody, CardHeader } from './components';
import { ResultContainer, WordCard } from './styles';

export const ResultComponent = ({ result }: IResultComponent) => {
  return (
    <ResultContainer>
      {result?.map((word: IWord, index: number) => (
        <WordCard key={index}>
          <CardHeader word={word} />
          <CardBody word={word} />
        </WordCard>
      ))}
    </ResultContainer>
  );
};
