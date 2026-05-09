export type Dimension = readonly [
  T: number, // time
  L: number, // length
  M: number, // mass
  I: number, // electric current
  θ: number, // temperature
  N: number, // amount of substance
  J: number  // luminous intensity
];

export type DimDef< D extends Dimension > = D;

export type ScalarDim = DimDef< [ 0, 0, 0, 0, 0, 0, 0 ] >;

export type TimeDim = DimDef< [ 1, 0, 0, 0, 0, 0, 0 ] >;
export type LengthDim = DimDef< [ 0, 1, 0, 0, 0, 0, 0 ] >;
export type MassDim = DimDef< [ 0, 0, 1, 0, 0, 0, 0 ] >;
export type ElectricCurrentDim = DimDef< [ 0, 0, 0, 1, 0, 0, 0 ] >;
export type TemperatureDim = DimDef< [ 0, 0, 0, 0, 1, 0, 0 ] >;
export type AmountOfSubstanceDim = DimDef< [ 0, 0, 0, 0, 0, 1, 0 ] >;
export type LuminousIntensityDim = DimDef< [ 0, 0, 0, 0, 0, 0, 1 ] >;

export type VoltageDim = DimDef< [ -3, 2, 1, -1, 0, 0, 0 ] >;
export type PowerDim = DimDef< [ -3, 2, 1, 0, 0, 0, 0 ] >;
export type PressureDim = DimDef< [ -2, -1, 1, 0, 0, 0 ,0 ] >;
export type ForceDim = DimDef< [ -2, 1, 1, 0, 0, 0, 0 ] >;
export type EnergyDim = DimDef< [ -2, 2, 1, 0, 0, 0, 0 ] >;
export type ActivityDim = DimDef< [ -1, 0, 0, 0, 0, 0, 0 ] >;
export type FrequencyDim = DimDef< [ -1, 0, 0, 0, 0, 0, 0 ] >;
export type ElectricChargeDim = DimDef< [ 1, 0, 0, 1, 0, 0, 0 ] >;
