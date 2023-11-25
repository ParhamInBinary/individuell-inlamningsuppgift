import { Box, Typography } from '@mui/material';

import {
  CardBodyContainer,
  DefinitionContainer,
  ICardBody,
  SubContainer,
} from '.';
import { IDefenition, IMeaning } from '../../../..';

export const CardBody = ({ word }: ICardBody) => {
  return (
    <CardBodyContainer>
      {/* Render each meaning of the word */}
      {word.meanings.map((meaning: IMeaning, index: number) => (
        <SubContainer key={index}>
          <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
            {meaning.partOfSpeech}
          </Typography>

          {/* Render each definition of the meaning */}
          {meaning.definitions.map((definition: IDefenition, index: number) => (
            <DefinitionContainer key={index}>
              <Box sx={{ display: 'flex', gap: '5px' }}>
                <Typography variant="caption">{`${index + 1}.`}</Typography>
                <Typography variant="subtitle1">
                  {definition.definition}
                </Typography>
              </Box>
              {definition.example && (
                <Typography variant="overline" sx={{ paddingLeft: '25px' }}>
                  {`Example: ${definition.example}`}
                </Typography>
              )}
            </DefinitionContainer>
          ))}

          {/* Render each antonym of the word */}
          {meaning.antonyms.length > 0 && (
            <Box>
              <Typography variant="h6" sx={{ fontWeight: '100' }}>
                Antonyms:
              </Typography>
              <Typography>{meaning.antonyms.join(', ')}</Typography>
            </Box>
          )}

          {/* Render each synonym of the word */}
          {meaning.synonyms.length > 0 && (
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Synonyms:
              </Typography>
              <Typography>{meaning.synonyms.join(', ')}</Typography>
            </Box>
          )}
        </SubContainer>
      ))}
    </CardBodyContainer>
  );
};
