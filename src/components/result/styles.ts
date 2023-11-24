import { Box, styled } from '@mui/material';

export const ResultContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  width: '50%',
  padding: '20px',
}));

export const WordCard = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  width: '100%',
  border: '1px solid #979797',
  padding: '20px',
  borderRadius: '5px',
}));
