import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCH_WORD = 'h';

class SegmentH extends AbstractSegment<SegmentPayload, string> {
  public constructor(seg: Segment) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchWord === WATCH_WORD;
  }

  public fulfill(arg: SegmentPayload): string {
    return `You are in Segment H with arg ${arg}`;
  }
}

export default SegmentH;
