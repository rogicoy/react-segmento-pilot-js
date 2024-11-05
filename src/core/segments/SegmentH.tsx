import { Typography } from '@mui/material';
import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCHWORD = 'mangosteen';

/**
 * SegmentH serves as an example to illustrate the structure and functionality of an
 * actual segment component.
 */
class SegmentH extends AbstractSegment<SegmentPayload, JSX.Element> {
  public constructor(seg?: Segment<SegmentPayload, JSX.Element>) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchword === WATCHWORD;
  }

  public fulfill(arg: SegmentPayload): JSX.Element {
    console.log('Segment-H:', arg);
    return (
      <Typography variant='h4'>
        You are now in Segment-H, the final segment in the chain, which requires
        a mangosteen to activate. Selecting a mango will switch you back to
        Segment-A, while selecting any other fruit will keep you in this
        segment.
      </Typography>
    );
  }
}

export default SegmentH;
