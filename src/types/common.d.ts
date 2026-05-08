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

export type SymbolContext =
  | 'standard'
  | 'alternative'
  | 'typography'
  | 'legacy';

export type Symbol = {
  context: SymbolContext;
  ascii: string;
  unicode?: string;
  latex?: string;
};

export type Name = readonly [
  SINGULAR: string,
  PLURAL?: string
];

export type Meta = {
  symbol: {
    default: Symbol[];
    localized?: { [ L in Lang ]?: Symbol[] };
  };
  name?: { [ L in Lang ]?: Name };
  description?: { [ L in Lang ]?: string };
};

export type Deprecated< R = unknown > = {
  replacement?: R;
  since?: string;
  reason?: string;
};
