import { Typography } from '@mui/material';

const Latte = () => {
  return (
    <Typography variant='h4' sx={{ textAlign: 'justify' }}>
      Wassup, legend? You're in <b>Latte Segment</b>. Selecting <b>machiato</b>{' '}
      will take you to <b>Machiato Segment</b>, while selecting other coffee
      will keep you here.
    </Typography>
  );
};

export default Latte;
