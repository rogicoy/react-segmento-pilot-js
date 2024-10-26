import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCH_WORD = 'c';

class SegmentC extends AbstractSegment<SegmentPayload, string> {
  public constructor(seg: Segment) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchWord === WATCH_WORD;
  }

  public fulfill(arg: SegmentPayload): string {
    return `You are in Segment C with arg ${arg}`;
  }
}

export default SegmentC;
