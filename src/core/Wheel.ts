import { Segment } from './interfaces';

class Wheel<X, Y> {
  private head: Segment<X, Y>;
  private tail: Segment<X, Y>;
  private live: Segment<X, Y>;

  public constructor(seg: Segment<X, Y>) {
    this.head = seg;
    this.tail = this.head;
    this.live = this.head;
  }

  public getHead(): Segment<X, Y> {
    return this.head;
  }

  public getTail(): Segment<X, Y> {
    return this.tail;
  }

  public getLive(): Segment<X, Y> {
    return this.live;
  }

  public appendSegment(seg: Segment<X, Y>): void {
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

  public fulfill(arg: X): Y {
    const next = this.live.getNext();

    if (next?.inScope(arg)) {
      this.live = next;
    }

    return this.live.fulfill(arg);
  }
}

export default Wheel;
