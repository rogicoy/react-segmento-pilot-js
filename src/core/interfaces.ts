export interface SegmentPayload {
  watchWord: string;
}

/**
 * The Segment represents a single node within the wheel (or segment chain).
 */
export interface Segment<X = unknown, Y = unknown> {
  /**
   * This function checks whether the argument meets the scope conditions of the
   * segment.
   * @param arg
   * @returns
   */
  inScope: (arg: X) => boolean;

  /**
   * This function performs the operation specific to this segment.
   * @param arg
   * @returns
   */
  fulfill: (arg: X) => Y;

  /**
   * This function assigns the next segment in the chain to the current segment.
   * @param seg
   * @returns
   */
  setNext: (seg: Segment<X, Y>) => void;

  /**
   * This function returns the next segment in the chain.
   * @returns
   */
  getNext: () => Segment<X, Y> | undefined;
}
