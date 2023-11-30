import { Box, Typography } from '@mui/material';
import { VolumeUp } from '@mui/icons-material';

import { ICardHeader, IPhonetic } from '../../../..';
import { CardHeaderContainer } from './styles';


/**
 *
 * This component returns some of the information of the 
 * fetched data mapping out phonetics examples and the word searched for.
 */
export const CardHeader = ({ word }: ICardHeader) => {
  return (
    <CardHeaderContainer>
      <Typography variant="h4" fontWeight={'bold'}>
        {word.word}
      </Typography>
      {word.phonetics.map((example: IPhonetic, index: number) => (
        <Box key={index}>
          {example.text && (
            <>
              <Typography variant="body1" data-testid="phonetic">{`[${example.text}]`}</Typography>
              {example.audio && (
                <VolumeUp data-testid="TextToSpeech" onClick={() => new Audio(example.audio).play()} />
              )}
            </>
          )}
        </Box>
      ))}
    </CardHeaderContainer>
  );
};
