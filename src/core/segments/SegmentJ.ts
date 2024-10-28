import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCHWORD = 'mangosteen';

class SegmentJ extends AbstractSegment<SegmentPayload, string> {
  public constructor(seg?: Segment<SegmentPayload, string>) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchword === WATCHWORD;
  }

  public fulfill(arg: SegmentPayload): string {
    console.log('Segment-J:', arg);
    return `You are in Segment-J which requires mangosteen to activate.`;
  }
}

export default SegmentJ;
