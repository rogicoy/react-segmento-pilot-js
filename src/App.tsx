import {
  Box,
  FormControl,
  FormHelperText,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import Wheel from './core/Wheel';
import FruitSegment from './core/segments/FruitSegment';
import Banana from './core/segments/components/Banana';
import Durian from './core/segments/components/Durian';
import Lanzones from './core/segments/components/Lanzones';
import Mango from './core/segments/components/Mango';
import Mangosteen from './core/segments/components/Mangosteen';
import Papaya from './core/segments/components/Papaya';
import Pineapple from './core/segments/components/Pineapple';
import Rambutan from './core/segments/components/Rambutan';

const watchwords = [
  'banana',
  'durian',
  'lanzones',
  'mango',
  'mangosteen',
  'papaya',
  'pineapple',
  'rambutan',
];

const App = () => {
  const [segment, setSegment] = useState(watchwords[0]);
  const [watchword, setWatchword] = useState(watchwords[0]);

  const wheel = useMemo(() => {
    const wheel = new Wheel(new FruitSegment(watchwords[0]));
    wheel.appendSegment(new FruitSegment(watchwords[1]));
    wheel.appendSegment(new FruitSegment(watchwords[2]));
    wheel.appendSegment(new FruitSegment(watchwords[3]));
    wheel.appendSegment(new FruitSegment(watchwords[4]));
    wheel.appendSegment(new FruitSegment(watchwords[5]));
    wheel.appendSegment(new FruitSegment(watchwords[6]));
    wheel.appendSegment(new FruitSegment(watchwords[7]));
    return wheel;
  }, []);

  useEffect(() => {
    wheel.fulfill({ watchword }).then((seg) => {
      setSegment(seg);
    });
  }, [segment, watchword, wheel]);

  function setDisplay(): JSX.Element {
    switch (segment) {
      case watchwords[0]:
        return <Banana />;
      case watchwords[1]:
        return <Durian />;
      case watchwords[2]:
        return <Lanzones />;
      case watchwords[3]:
        return <Mango />;
      case watchwords[4]:
        return <Mangosteen />;
      case watchwords[5]:
        return <Papaya />;
      case watchwords[6]:
        return <Pineapple />;
      case watchwords[7]:
        return <Rambutan />;
      default:
        return (
          <Typography variant='h4'>
            Oops! It seems the watchword is invalid.
          </Typography>
        );
    }
  }

  return (
    <Box sx={{ m: 4, p: 2, minHeight: 200 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 3 }}>
          <FormControl fullWidth>
            <InputLabel id='watchword-label'>Select a watchword</InputLabel>
            <Select
              labelId='watchword-label'
              id='watchword-id'
              label='Select a watchword'
              value={watchword}
              onChange={(event) => setWatchword(event.target.value)}
            >
              {watchwords.map((word, index) => (
                <MenuItem key={index} value={word}>
                  {word}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              The watchword triggers the application to switch to the next
              segment. Once the watchword meets the conditions for the next
              segment, the wheel rotates and executes the corresponding
              operation.
            </FormHelperText>
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>{setDisplay()}</Grid2>
      </Grid2>
    </Box>
  );
};

export default App;
