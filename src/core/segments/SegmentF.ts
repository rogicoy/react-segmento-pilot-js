import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCHWORD = 'lanzones';

class SegmentF extends AbstractSegment<SegmentPayload, string> {
  public constructor(seg?: Segment<SegmentPayload, string>) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchword === WATCHWORD;
  }

  public fulfill(arg: SegmentPayload): string {
    console.log('Segment-F:', arg);
    return `You are in Segment-F which requires lanzones to activate.`;
  }
}

export default SegmentF;
