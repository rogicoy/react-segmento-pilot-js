import { Typography } from '@mui/material';
import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCHWORD = 'pineapple';

class SegmentC extends AbstractSegment<SegmentPayload, JSX.Element> {
  public constructor(seg?: Segment<SegmentPayload, JSX.Element>) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchword === WATCHWORD;
  }

  public fulfill(arg: SegmentPayload): JSX.Element {
    console.log('Segment-C:', arg);
    return (
      <Typography variant='h4'>
        You are now in Segment-C, which requires a pineapple to activate.
        Selecting a papaya will switch you to Segment-D, while selecting any
        other fruit will keep you in this segment.
      </Typography>
    );
  }
}

export default SegmentC;
