import BaseSegment from '../segment/BaseSegment';
import { Segment, SegmentPayload } from '../segment/types';

class CoffeeSegment extends BaseSegment<SegmentPayload, Promise<string>> {
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
    console.log('Fulfilling', this.name, arg);

    return new Promise((resolve) => {
      const actions = [
        'action-1',
        'action-2',
        'action-3',
        'action-4',
        'action-5',
        'action-6',
        'action-7',
        'action-8',
      ];

      this.defineActions(actions);
      this.recurseProgress(0, actions, resolve);
    });
  }

  private recurseProgress(
    index: number,
    actions: string[],
    resolve: (arg: string) => void
  ) {
    if (index > -1) {
      if (index < actions.length) {
        this.setActionInProgress(actions[index]);

        setTimeout(() => {
          console.log(this.name, actions[index], 'completed');
          this.setActionCompleted(actions[index]);
          this.recurseProgress(index + 1, actions, resolve);
        }, 2000);
      } else {
        resolve(this.name);
      }
    }
  }
}

export default CoffeeSegment;
