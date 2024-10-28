import { Typography } from '@mui/material';
import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCHWORD = 'rambutan';

class SegmentE extends AbstractSegment<SegmentPayload, JSX.Element> {
  public constructor(seg?: Segment<SegmentPayload, JSX.Element>) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchword === WATCHWORD;
  }

  public fulfill(arg: SegmentPayload): JSX.Element {
    console.log('Segment-E:', arg);
    return (
      <Typography variant='h4'>
        You are now in Segment-E, which requires a rambutan to activate.
        Selecting a lanzones will switch you to Segment-F, while selecting any
        other fruit will keep you in this segment.
      </Typography>
    );
  }
}

export default SegmentE;
