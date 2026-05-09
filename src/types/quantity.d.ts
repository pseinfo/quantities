import type { Dimension } from './dimension';

export type QuantityRef<
  D extends Dimension = Dimension,
  ID extends string = string
> = ID & {
  readonly __brand: 'quantityRef';
  readonly __dim: D;
};
