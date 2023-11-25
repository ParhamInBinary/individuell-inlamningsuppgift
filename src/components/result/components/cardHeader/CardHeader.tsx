import { Box, Typography } from '@mui/material';
import { VolumeUp } from '@mui/icons-material';

import { ICardHeader, IPhonetic } from '../../../..';
import { CardHeaderContainer } from './styles';

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
              <Typography variant="body1">{`[${example.text}]`}</Typography>
              {example.audio && (
                <VolumeUp onClick={() => new Audio(example.audio).play()} />
              )}
            </>
          )}
        </Box>
      ))}
    </CardHeaderContainer>
  );
};
