import { IResultComponent } from '.';
import { IWord } from '../..';
import { CardBody, CardHeader } from './components';
import { ResultContainer, WordCard } from './styles';

/**
 *
 * This component maps out each result of the fetched data.
 */
export const ResultComponent = ({ result }: IResultComponent) => {
  return (
    <ResultContainer>
      {result?.map((word: IWord, index: number) => (
        <WordCard key={index} data-testid="resultCard">
          <CardHeader word={word} />
          <CardBody word={word} />
        </WordCard>
      ))}
    </ResultContainer>
  );
};
