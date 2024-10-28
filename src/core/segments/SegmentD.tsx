import { Typography } from '@mui/material';
import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCHWORD = 'papaya';

class SegmentD extends AbstractSegment<SegmentPayload, JSX.Element> {
  public constructor(seg?: Segment<SegmentPayload, JSX.Element>) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchword === WATCHWORD;
  }

  public fulfill(arg: SegmentPayload): JSX.Element {
    console.log('Segment-D:', arg);
    return (
      <Typography variant='h4'>
        You are now in Segment-D, which requires a papaya to activate. Selecting
        a rambutan will switch you to Segment-E, while selecting any other fruit
        will keep you in this segment.
      </Typography>
    );
  }
}

export default SegmentD;
