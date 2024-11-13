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
import CoffeeSegment from './core/segments/CoffeeSegment';
import Americano from './core/segments/components/Americano';
import Cappucino from './core/segments/components/Cappucino';
import Cortado from './core/segments/components/Cortado';
import Espresso from './core/segments/components/Espresso';
import Flatwhite from './core/segments/components/Flatwhite';
import Latte from './core/segments/components/Latte';
import Machiato from './core/segments/components/Machiato';
import Mocha from './core/segments/components/Mocha';

const watchwords = [
  'americano',
  'cappucino',
  'cortado',
  'espresso',
  'flatwhite',
  'latte',
  'machiato',
  'mocha',
];

const App = () => {
  const [segment, setSegment] = useState(watchwords[0]);
  const [watchword, setWatchword] = useState(watchwords[0]);
  const [loading, setLoading] = useState(false);

  const wheel = useMemo(() => {
    const wheel = new Wheel(new CoffeeSegment(watchwords[0]));
    wheel.appendSegment(new CoffeeSegment(watchwords[1]));
    wheel.appendSegment(new CoffeeSegment(watchwords[2]));
    wheel.appendSegment(new CoffeeSegment(watchwords[3]));
    wheel.appendSegment(new CoffeeSegment(watchwords[4]));
    wheel.appendSegment(new CoffeeSegment(watchwords[5]));
    wheel.appendSegment(new CoffeeSegment(watchwords[6]));
    wheel.appendSegment(new CoffeeSegment(watchwords[7]));
    return wheel;
  }, []);

  useEffect(() => {
    if (segment !== watchword) {
      setLoading(true);
      wheel.fulfill({ watchword }).then((seg) => {
        setSegment(seg);
        setLoading(false);
      });
    }
  }, [segment, watchword, wheel]);

  function showSegmentContent(): JSX.Element {
    if (loading) {
      return <Typography variant='h4'>loading...</Typography>;
    }

    switch (segment) {
      case watchwords[0]:
        return <Americano />;
      case watchwords[1]:
        return <Cappucino />;
      case watchwords[2]:
        return <Cortado />;
      case watchwords[3]:
        return <Espresso />;
      case watchwords[4]:
        return <Flatwhite />;
      case watchwords[5]:
        return <Latte />;
      case watchwords[6]:
        return <Machiato />;
      case watchwords[7]:
        return <Mocha />;
      default:
        return (
          <Typography variant='h4'>
            Oops! It seems the watchword is invalid.
          </Typography>
        );
    }
  }

  return (
    <Box sx={{ m: 4, p: 2, minHeight: 400 }}>
      <Grid2 container spacing={4} padding={4}>
        <Grid2 size={{ xs: 12, md: 4 }}>
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
        <Grid2 size={{ xs: 12, md: 8 }}>{showSegmentContent()}</Grid2>
      </Grid2>
    </Box>
  );
};

export default App;
