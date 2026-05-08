export type Lang =
  | 'en'
  | 'de';

export type UnitSystem =
  | 'si'
  | 'cgs'
  | 'cgs/gaussian'
  | 'cgs/emu'
  | 'cgs/esu'
  | 'natural'
  | 'natural/planck'
  | 'natural/atomic'
  | 'imperial'
  | 'usc'
  | 'astronomical'
  | 'common';

export type Symbol = {
  ascii: string;
  unicode?: string;
  latex?: string;
};

export type SymbolAlt = Symbol & {
  readonly context?: 'standard' | 'alternative' | 'typography' | 'legacy';
};

export type Name = readonly [
  SINGULAR: string,
  PLURAL?: string
];

export type Meta = {
  symbol: {
    default: Symbol;
    alt?: SymbolAlt[];
    localized?: { [ L in Lang ]?: SymbolAlt[] };
  };
  name?: { [ L in Lang ]?: Name };
  description?: { [ L in Lang ]?: string };
};

export type Deprecated< R = unknown > = {
  replacement?: R;
  since?: string;
  reason?: string;
};
