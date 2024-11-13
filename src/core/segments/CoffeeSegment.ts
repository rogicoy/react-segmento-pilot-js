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
      const actions = ['roasting', 'grinding', 'brewing', 'adjusting'];

      console.log('Fulfilling', this.name, arg);
      this.defineActions(actions);

      actions.forEach((action) => {
        this.setActionInProgress(action);
        this.setupTimeout(action, resolve);
      });
    });
  }

  private setupTimeout(name: string, resolve: (arg: string) => void): void {
    const duration = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

    setTimeout(() => {
      console.log(this.name, 'completed', name);
      this.setActionCompleted(name);
      this.resolveOnCompleted(resolve);
    }, duration);
  }

  private resolveOnCompleted(resolve: (arg: string) => void): void {
    if (this.getProgressOverview().completed === 3) {
      resolve(this.name);
    }
  }
}

export default CoffeeSegment;
