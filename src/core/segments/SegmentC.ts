import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCHWORD = 'c';

class SegmentC extends AbstractSegment<SegmentPayload, string> {
  public constructor(seg?: Segment<SegmentPayload, string>) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchWord === WATCHWORD;
  }

  public fulfill(arg: SegmentPayload): string {
    return `You are in Segment C with arg ${arg}`;
  }
}

export default SegmentC;
