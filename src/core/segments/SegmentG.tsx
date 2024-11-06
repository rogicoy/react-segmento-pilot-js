import { Typography } from '@mui/material';
import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCHWORD = 'durian';

/**
 * SegmentG serves as an example to illustrate the structure and functionality of an
 * actual segment component.
 */
class SegmentG extends AbstractSegment<SegmentPayload, JSX.Element> {
  public constructor(seg?: Segment<SegmentPayload, JSX.Element>) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchword === WATCHWORD;
  }

  public fulfill(arg: SegmentPayload): JSX.Element {
    console.log('Segment-G:', arg);
    return (
      <Typography variant='h4'>
        You are now in Segment-G, which requires a durian to activate. Selecting
        a mangosteen will switch you to Segment-H, while selecting any other
        fruit will keep you in this segment.
      </Typography>
    );
  }
}

export default SegmentG;
