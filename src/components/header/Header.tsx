import { Typography } from '@mui/material';

import { HeaderContainer } from './styles';

/**
 * 
 * This component simply return the text in the header.
 */
export const Header = () => {
  return (
    <HeaderContainer>
      <Typography variant="h1">Dictionary</Typography>
    </HeaderContainer>
  );
};
