import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCHWORD = 'durian';

class SegmentG extends AbstractSegment<SegmentPayload, string> {
  public constructor(seg?: Segment<SegmentPayload, string>) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchword === WATCHWORD;
  }

  public fulfill(arg: SegmentPayload): string {
    console.log('Segment-G:', arg);
    return `You are in Segment-G which requires durian to activate.`;
  }
}

export default SegmentG;
