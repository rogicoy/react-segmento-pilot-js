import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCHWORD = 'mango';

class SegmentA extends AbstractSegment<SegmentPayload, string> {
  public constructor(seg?: Segment<SegmentPayload, string>) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchword === WATCHWORD;
  }
  public fulfill(arg: SegmentPayload): string {
    console.log('Segment-A:', arg);
    return `Welcome! You are in Segment-A which requires mango to activate.`;
  }
}

export default SegmentA;
