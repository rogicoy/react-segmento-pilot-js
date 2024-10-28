import { Typography } from '@mui/material';
import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCHWORD = 'banana';

class SegmentB extends AbstractSegment<SegmentPayload, JSX.Element> {
  public constructor(seg?: Segment<SegmentPayload, JSX.Element>) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchword === WATCHWORD;
  }

  public fulfill(arg: SegmentPayload): JSX.Element {
    console.log('Segment-B:', arg);
    return (
      <Typography variant='h4'>
        You are now in Segment-B, which requires a banana to activate. Selecting
        a pineapple will switch you to Segment-C, while selecting any other
        fruit will keep you in this segment.
      </Typography>
    );
  }
}

export default SegmentB;
