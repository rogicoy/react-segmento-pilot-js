import { Segment, SegmentPayload } from './interfaces';
import HeadSegment from './segments/HeadSegment';

class CoreModule {
  private head: Segment<SegmentPayload, string>;
  private tail: Segment<SegmentPayload, string>;
  private live: Segment<SegmentPayload, string>;

  public constructor() {
    this.head = new HeadSegment();
    this.tail = this.head;
    this.live = this.head;
  }

  public addSegment(seg: Segment<SegmentPayload, string>): void {
    seg.setNext(this.head);
    this.tail.setNext(seg);
    this.tail = seg;
  }

  public reset(): void {
    this.live = this.head;
  }

  public clear(): void {
    this.live = this.head;
    this.tail = this.head;
  }

  public fulfill(arg: SegmentPayload): string {
    const next = this.live.getNext();

    if (next?.inScope(arg)) {
      this.live = next;
    }

    return this.live.fulfill(arg);
  }
}

export default CoreModule;
