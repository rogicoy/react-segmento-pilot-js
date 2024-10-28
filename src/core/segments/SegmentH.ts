import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCHWORD = 'calamansi';

class SegmentH extends AbstractSegment<SegmentPayload, string> {
  public constructor(seg?: Segment<SegmentPayload, string>) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchword === WATCHWORD;
  }

  public fulfill(arg: SegmentPayload): string {
    console.log('Segment-H:', arg);
    return `You are in Segment-H which requires calamansi to activate.`;
  }
}

export default SegmentH;
