export interface SegmentPayload {
  watchWord: string;
}

export interface Segment<X = unknown, Y = unknown> {
  inScope: (arg: X) => boolean;
  fulfill: (arg: X) => Y;
  setNext: (seg: Segment) => void;
  getNext: () => Segment | undefined;
}
