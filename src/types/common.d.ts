export type Lang =
  | 'en'
  | 'de';

export type UnitSystem =
  | 'si'
  | 'imperial'
  | 'usc'
  | 'cgs'
  | 'gaussian'
  | 'natural'
  | 'atomic'
  | 'planck'
  | 'astronomical'
  | 'common';

export type Symbol = {
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
    default: Symbol;
    localized?: { [ L in Lang ]?: Symbol };
  };
  name?: { [ L in Lang ]?: Name };
  description?: { [ L in Lang ]?: string };
};

export type Deprecated< R = unknown > = {
  replacement?: R;
  since?: string;
  reason?: string;
};
