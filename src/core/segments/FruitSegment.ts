import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

class FruitSegment extends AbstractSegment<SegmentPayload, string> {
  private name: string;

  public constructor(name: string, segment?: Segment<SegmentPayload, string>) {
    super(segment);
    this.name = name;
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchword === this.name;
  }

  public fulfill(arg: SegmentPayload): string {
    console.log(`${this.name} segment:`, arg);
    return this.name;
  }
}

export default FruitSegment;
