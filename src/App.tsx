import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { WATCHWORDS } from './core/segments/watchwords';

const App = () => {
  return (
    <Box sx={{ m: 4, p: 2, width: 600 }}>
      <Stack
        direction='column'
        spacing={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FormControl fullWidth>
          <InputLabel id='watchword-label'>Select a watchword</InputLabel>
          <Select
            labelId='watchword-label'
            id='watchword-id'
            label='Select a watchword'
          >
            {WATCHWORDS.map((word) => (
              <MenuItem>{word}</MenuItem>
            ))}
          </Select>
          <FormHelperText>
            The watchword triggers the application to move to the next segment.
            Once the watchword meets the conditions for the next segment, the
            wheel rotates and executes the corresponding operation.
          </FormHelperText>
        </FormControl>
        <Typography variant='h3'>
          This is a sample content of a segment.
        </Typography>
        <Typography variant='h4'>
          This is a sample content of a segment.
        </Typography>
      </Stack>
    </Box>
  );
};

export default App;
