import { Segment } from './interfaces';

abstract class AbstractSegment<X, Y> implements Segment<X, Y> {
  private next: Segment<X, Y> | undefined;

  public constructor(seg?: Segment<X, Y>) {
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

  public abstract inScope(arg: X): boolean;

  public abstract fulfill(arg: X): Y;

  public setNext(seg: Segment<X, Y>): void {
    this.next = seg;
  }

  public getNext(): Segment<X, Y> | undefined {
    return this.next;
  }
}

export default AbstractSegment;
