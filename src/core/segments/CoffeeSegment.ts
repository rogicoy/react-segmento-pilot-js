import AbstractSegment from '../AbstractSegment';
import { Segment, SegmentPayload } from '../interfaces';

class CoffeeSegment extends AbstractSegment<SegmentPayload, Promise<string>> {
  private name: string;

  public constructor(
    name: string,
    segment?: Segment<SegmentPayload, Promise<string>>
  ) {
    super(segment);
    this.name = name;
  }

  public inScope(arg: SegmentPayload): boolean {
    return arg.watchword === this.name;
  }

  public fulfill(arg: SegmentPayload): Promise<string> {
    return new Promise((resolve) => {
      console.log('Fulfilling', this.name, arg);

      setTimeout(() => {
        resolve(this.name);
      }, 1000);
    });
  }
}

export default CoffeeSegment;
