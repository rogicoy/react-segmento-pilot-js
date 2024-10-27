import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCHWORD = 'f';

class SegmentF extends AbstractSegment<SegmentPayload, string> {
  public constructor(seg?: Segment<SegmentPayload, string>) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchWord === WATCHWORD;
  }

  public fulfill(arg: SegmentPayload): string {
    return `You are in Segment F with arg ${arg}`;
  }
}

export default SegmentF;
