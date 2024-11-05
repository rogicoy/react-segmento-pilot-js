import { Typography } from '@mui/material';
import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCHWORD = 'mango';

/**
 * SegmentA serves as an example to illustrate the structure and functionality of an
 * actual segment component.
 */
class SegmentA extends AbstractSegment<SegmentPayload, JSX.Element> {
  public constructor(seg?: Segment<SegmentPayload, JSX.Element>) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchword === WATCHWORD;
  }

  public fulfill(arg: SegmentPayload): JSX.Element {
    console.log('Segment-A:', arg);
    return (
      <Typography variant='h4'>
        Welcome! You are currently in Segment-A, the first segment in the chain,
        which requires a mango to activate. Selecting a banana will switch you
        to Segment-B, while selecting any other fruit will keep you in this
        segment.
      </Typography>
    );
  }
}

export default SegmentA;
