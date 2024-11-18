import {
  Box,
  FormControl,
  FormHelperText,
  Grid2,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import Wheel from './core/Wheel';
import CoffeeSegment from './core/components/CoffeeSegment';
import Americano from './core/components/views/Americano';
import Cappucino from './core/components/views/Cappucino';
import Cortado from './core/components/views/Cortado';
import Espresso from './core/components/views/Espresso';
import Flatwhite from './core/components/views/Flatwhite';
import Latte from './core/components/views/Latte';
import Machiato from './core/components/views/Machiato';
import Mocha from './core/components/views/Mocha';

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

  function loadProgress(): JSX.Element {
    return (
      <Box sx={{ width: '100%' }}>
        <Grid2 container spacing={2} padding={2}>
          <Grid2 size={12}>
            <LinearProgress />
          </Grid2>
          <Grid2 size={12}>
            <Typography variant='h4'>Brewing...</Typography>
          </Grid2>
        </Grid2>
      </Box>
    );
  }

  function loadContent(): JSX.Element {
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
        return <></>;
    }
  }

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          minHeight: 600,
          minWidth: 300,
          maxWidth: 600,
        }}
      >
        <Grid2 container spacing={4} padding={4}>
          <Grid2 size={12}>
            <FormControl>
              <InputLabel id='watchword-label'>Select a watchword</InputLabel>
              <Select
                labelId='watchword-label'
                id='watchword-id'
                label='Select a watchword'
                value={watchword}
                onChange={(event) => setWatchword(event.target.value)}
                fullWidth
              >
                {watchwords.map((word, index) => (
                  <MenuItem key={index} value={word}>
                    {word}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText sx={{ textAlign: 'justify' }}>
                The watchword triggers the application to switch to the next
                segment. Once the watchword meets the conditions for the next
                segment, the wheel rotates and executes the corresponding
                operation.
              </FormHelperText>
            </FormControl>
          </Grid2>
          <Grid2 size={12}>{loading ? loadProgress() : loadContent()}</Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default App;
