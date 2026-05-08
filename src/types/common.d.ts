export type Lang =
  | 'en'
  | 'de';

export type UnitSystem =
  | 'si'
  | 'cgs'
  | 'cgs_gaussian'
  | 'cgs_emu'
  | 'cgs_esu'
  | 'natural'
  | 'natural_planck'
  | 'natural_atomic'
  | 'imperial'
  | 'usc'
  | 'astronomical'
  | 'common';

export type LangGroup< T = unknown > = { [ L in Lang ]?: T };

export type Symbol = {
  usage?: {
    canonical?: boolean;
    typographic?: boolean;
    deprecated?: boolean;
  };
  systems?: UnitSystem[];
  lang?: Lang;
  plain: string;
  unicode?: string;
  latex?: string;
};

export type Name = string | readonly [
  singular: string, plural?: string
];

export type Meta = {
  symbol: Symbol[];
  name?: LangGroup< Name >;
  description?: LangGroup< string >;
};

export type Deprecated< R = unknown > = {
  replacement?: R;
  since?: string;
  reason?: LangGroup< string >;
};
