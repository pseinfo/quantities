import type { Meta } from './common';

export type PrefixRef< ID extends string = string > = ID & {
  readonly __brand: 'prefixRef';
};

export type PrefixDef< R extends PrefixRef = PrefixRef > = {
  readonly id: R;
  factor: number;
  meta: Meta;
};
