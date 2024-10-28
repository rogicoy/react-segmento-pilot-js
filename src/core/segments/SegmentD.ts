import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

export const WATCHWORD = 'papaya';

class SegmentD extends AbstractSegment<SegmentPayload, string> {
  public constructor(seg?: Segment<SegmentPayload, string>) {
    super(seg);
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchword === WATCHWORD;
  }

  public fulfill(arg: SegmentPayload): string {
    console.log('Segment-D:', arg);
    return `You are in Segment-D which requires papaya to activate.`;
  }
}

export default SegmentD;
