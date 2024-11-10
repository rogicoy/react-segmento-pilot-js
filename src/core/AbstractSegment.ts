import AbstractProgressible from './AbstractProgressible';
import { Segment } from './interfaces';

abstract class AbstractSegment<X, Y>
  extends AbstractProgressible
  implements Segment<X, Y>
{
  private next: Segment<X, Y> | undefined;

  public constructor(seg?: Segment<X, Y>) {
    super();
    this.next = seg;
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
