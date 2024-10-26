import { describe, expect, test } from 'vitest';
import { Segment } from '../../core/interfaces';
import Wheel from '../../core/Wheel';

class TestSegment implements Segment<string, string> {
  public next: Segment<string, string> | undefined = undefined;

  public data: string;

  public constructor(arg: string) {
    this.data = arg;
  }

  public inScope(arg: string): boolean {
    return this.data === arg;
  }

  public fulfill(arg: string): string {
    return `${this.data}.${arg}`;
  }

  public setNext(seg: Segment<string, string>): void {
    this.next = seg;
  }

  public getNext(): Segment<string, string> | undefined {
    return this.next;
  }
}

describe('Wheel', () => {
  const wheel = new Wheel<string, string>(new TestSegment('a'));

  test('Adding a segments', () => {
    wheel.addSegment(new TestSegment('b'));
    expect((wheel.getTail() as TestSegment).data).toBe('b');

    wheel.addSegment(new TestSegment('c'));
    expect((wheel.getTail() as TestSegment).data).toBe('c');

    wheel.addSegment(new TestSegment('d'));
    expect((wheel.getTail() as TestSegment).data).toBe('d');

    expect((wheel.getHead() as TestSegment).data).toBe('a');
    expect((wheel.getLive() as TestSegment).data).toBe('a');
  });

  test('Running fulfill', () => {
    expect(wheel.fulfill('x')).toBe('a.x');
    expect(wheel.fulfill('b')).toBe('b.b');
    expect((wheel.getLive() as TestSegment).data).toBe('b');
    expect(wheel.fulfill('x')).toBe('b.x');
    expect(wheel.fulfill('c')).toBe('c.c');
    expect((wheel.getLive() as TestSegment).data).toBe('c');
    expect(wheel.fulfill('x')).toBe('c.x');
    expect(wheel.fulfill('a')).toBe('c.a');
    expect(wheel.fulfill('b')).toBe('c.b');
    expect(wheel.fulfill('c')).toBe('c.c');
    expect(wheel.fulfill('d')).toBe('d.d');
    expect((wheel.getLive() as TestSegment).data).toBe('d');
    expect(wheel.fulfill('x')).toBe('d.x');
    expect(wheel.fulfill('a')).toBe('a.a');
    expect((wheel.getLive() as TestSegment).data).toBe('a');
  });

  test('Resetting the wheel', () => {
    wheel.reset();
    expect((wheel.getHead() as TestSegment).data).toBe('a');
    expect((wheel.getTail() as TestSegment).data).toBe('d');
    expect((wheel.getLive() as TestSegment).data).toBe('a');
  });

  test('Clearing the wheel', () => {
    wheel.clear();
    expect((wheel.getHead() as TestSegment).data).toBe('a');
    expect((wheel.getTail() as TestSegment).data).toBe('a');
    expect((wheel.getLive() as TestSegment).data).toBe('a');
  });
});
