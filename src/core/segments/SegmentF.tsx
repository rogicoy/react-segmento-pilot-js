import { Typography } from '@mui/material';
import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCHWORD = 'lanzones';

/**
 * SegmentF serves as an example to illustrate the structure and functionality of an
 * actual segment component.
 */
class SegmentF extends AbstractSegment<SegmentPayload, JSX.Element> {
  public constructor(seg?: Segment<SegmentPayload, JSX.Element>) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchword === WATCHWORD;
  }

  public fulfill(arg: SegmentPayload): JSX.Element {
    console.log('Segment-F:', arg);
    return (
      <Typography variant='h4'>
        You are now in Segment-F, which requires a lanzones to activate.
        Selecting a durian will switch you to Segment-G, while selecting any
        other fruit will keep you in this segment.
      </Typography>
    );
  }
}

export default SegmentF;
