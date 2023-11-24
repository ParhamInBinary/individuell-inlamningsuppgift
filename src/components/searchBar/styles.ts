import { Box, styled } from '@mui/material';

export const SearchBarContainer = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  width: '60%',
  borderBottom: '1px solid #c1c1c1',
  padding: '0 40px 30px 40px',
}));
