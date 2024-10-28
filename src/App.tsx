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
import { WATCHWORDS } from './core/segments/watchwords';
import { useMemo, useState } from 'react';
import Wheel from './core/Wheel';
import SegmentA from './core/segments/SegmentA';
import SegmentB from './core/segments/SegmentB';
import SegmentC from './core/segments/SegmentC';
import SegmentD from './core/segments/SegmentD';
import SegmentE from './core/segments/SegmentE';
import SegmentF from './core/segments/SegmentF';
import SegmentG from './core/segments/SegmentG';
import SegmentH from './core/segments/SegmentH';
import SegmentI from './core/segments/SegmentI';
import SegmentJ from './core/segments/SegmentJ';

const App = () => {
  const [watchword, setWatchword] = useState(WATCHWORDS[0]);

  const wheel = useMemo(() => {
    const wheel = new Wheel(new SegmentA());
    wheel.addSegment(new SegmentB());
    wheel.addSegment(new SegmentC());
    wheel.addSegment(new SegmentD());
    wheel.addSegment(new SegmentE());
    wheel.addSegment(new SegmentF());
    wheel.addSegment(new SegmentG());
    wheel.addSegment(new SegmentH());
    wheel.addSegment(new SegmentI());
    wheel.addSegment(new SegmentJ());
    return wheel;
  }, []);

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
              {WATCHWORDS.map((word) => (
                <MenuItem value={word}>{word}</MenuItem>
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
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant='h3'>{wheel.fulfill({ watchword })}</Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default App;
