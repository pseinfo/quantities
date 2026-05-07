import type { DimDef } from './common';

export type ScalarDim = DimDef< [ 0, 0, 0, 0, 0, 0, 0 ] >;

export type TimeDim = DimDef< [ 1, 0, 0, 0, 0, 0, 0 ] >;
export type LengthDim = DimDef< [ 0, 1, 0, 0, 0, 0, 0 ] >;
export type MassDim = DimDef< [ 0, 0, 1, 0, 0, 0, 0 ] >;
