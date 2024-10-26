import { Segment, SegmentPayload } from './interfaces';

abstract class AbstractSegment implements Segment<SegmentPayload, string> {
  private next: Segment | undefined;

  public constructor(seg?: Segment) {
    this.next = seg;

    // We want to prevent subclasses from overriding the setNext and getNext
    // functions; however, JavaScript lacks a final keyword, unlike some other
    // languages. Therefore, we'll manually enforce this by checking in the
    // constructor and throwing an error if a subclass attempts to override them.

    if (this.setNext !== AbstractSegment.prototype.setNext) {
      throw new Error('The setNext function must not be overridden.');
    }

    if (this.getNext !== AbstractSegment.prototype.getNext) {
      throw new Error('The getNext function must not be overridden.');
    }
  }

  public abstract inScope(arg: SegmentPayload): boolean;

  public abstract fulfill(arg: SegmentPayload): string;

  public setNext(seg: Segment): void {
    this.next = seg;
  }

  public getNext(): Segment | undefined {
    return this.next;
  }
}

export default AbstractSegment;
