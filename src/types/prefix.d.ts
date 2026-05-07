export type PrefixRef< ID extends string = string > = ID & {
  readonly __brand: 'prefixRef';
};
