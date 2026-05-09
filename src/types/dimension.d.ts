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

// Dimensionless
export type ScalarDim = DimDef< [ 0, 0, 0, 0, 0, 0, 0 ] >;
export type AngleDim = ScalarDim;
export type SolidAngleDim = ScalarDim;

// Base Dimensions
export type TimeDim = DimDef< [ 1, 0, 0, 0, 0, 0, 0 ] >;
export type LengthDim = DimDef< [ 0, 1, 0, 0, 0, 0, 0 ] >;
export type MassDim = DimDef< [ 0, 0, 1, 0, 0, 0, 0 ] >;
export type ElectricCurrentDim = DimDef< [ 0, 0, 0, 1, 0, 0, 0 ] >;
export type TemperatureDim = DimDef< [ 0, 0, 0, 0, 1, 0, 0 ] >;
export type AmountOfSubstanceDim = DimDef< [ 0, 0, 0, 0, 0, 1, 0 ] >;
export type LuminousIntensityDim = DimDef< [ 0, 0, 0, 0, 0, 0, 1 ] >;

// Geometry
export type AreaDim = DimDef< [ 0, 2, 0, 0, 0, 0, 0 ] >;
export type VolumeDim = DimDef< [ 0, 3, 0, 0, 0, 0, 0 ] >;
export type CurvatureDim = DimDef< [ 0, -1, 0, 0, 0, 0, 0 ] >;

// Kinematics
export type FrequencyDim = DimDef< [ -1, 0, 0, 0, 0, 0, 0 ] >;
export type VelocityDim = DimDef< [ -1, 1, 0, 0, 0, 0, 0 ] >;
export type AccelerationDim = DimDef< [ -2, 1, 0, 0, 0, 0, 0 ] >;
export type JerkDim = DimDef< [ -3, 1, 0, 0, 0, 0, 0 ] >;
export type SnapDim = DimDef< [ -4, 1, 0, 0, 0, 0, 0 ] >;
export type AngularVelocityDim = DimDef< [ -1, 0, 0, 0, 0, 0, 0 ] >;
export type AngularAccelerationDim = DimDef< [ -2, 0, 0, 0, 0, 0, 0 ] >;

// Mechanics
export type ForceDim = DimDef< [ -2, 1, 1, 0, 0, 0, 0 ] >;
export type MomentumDim = DimDef< [ -1, 1, 1, 0, 0, 0, 0 ] >;
export type PressureDim = DimDef< [ -2, -1, 1, 0, 0, 0, 0 ] >;
export type EnergyDim = DimDef< [ -2, 2, 1, 0, 0, 0, 0 ] >;
export type PowerDim = DimDef< [ -3, 2, 1, 0, 0, 0, 0 ] >;
export type TorqueDim = DimDef< [ -2, 2, 1, 0, 0, 0, 0 ] >;
export type DensityDim = DimDef< [ 0, -3, 1, 0, 0, 0, 0 ] >;
export type SpecificVolumeDim = DimDef< [ 0, 3, -1, 0, 0, 0, 0 ] >;
export type DynamicViscosityDim = DimDef< [ -1, -1, 1, 0, 0, 0, 0 ] >;
export type KinematicViscosityDim = DimDef< [ -1, 2, 0, 0, 0, 0, 0 ] >;
export type SurfaceTensionDim = DimDef< [ -2, 0, 1, 0, 0, 0, 0 ] >;
export type ActionDim = DimDef< [ -1, 2, 1, 0, 0, 0, 0 ] >;
export type AngularMomentumDim = DimDef< [ -1, 2, 1, 0, 0, 0, 0 ] >;
export type MomentOfInertiaDim = DimDef< [ 0, 2, 1, 0, 0, 0, 0 ] >;

// Thermodynamics
export type EntropyDim = DimDef< [ -2, 2, 1, 0, -1, 0, 0 ] >;
export type HeatCapacityDim = EntropyDim;
export type SpecificHeatCapacityDim = DimDef< [ -2, 2, 0, 0, -1, 0, 0 ] >;
export type ThermalConductivityDim = DimDef< [ -3, 1, 1, 0, -1, 0, 0 ] >;
export type ThermalResistanceDim = DimDef< [ 3, -2, -1, 0, 1, 0, 0 ] >;
export type ThermalDiffusivityDim = KinematicViscosityDim;

// Electromagnetism
export type ElectricChargeDim = DimDef< [ 1, 0, 0, 1, 0, 0, 0 ] >;
export type VoltageDim = DimDef< [ -3, 2, 1, -1, 0, 0, 0 ] >;
export type ElectricFieldDim = DimDef< [ -3, 1, 1, -1, 0, 0, 0 ] >;
export type CapacitanceDim = DimDef< [ 4, -2, -1, 2, 0, 0, 0 ] >;
export type ResistanceDim = DimDef< [ -3, 2, 1, -2, 0, 0, 0 ] >;
export type ConductanceDim = DimDef< [ 3, -2, -1, 2, 0, 0, 0 ] >;
export type MagneticFluxDim = DimDef< [ -2, 2, 1, -1, 0, 0, 0 ] >;
export type MagneticFluxDensityDim = DimDef< [ -2, 0, 1, -1, 0, 0, 0 ] >;
export type InductanceDim = DimDef< [ -2, 2, 1, -2, 0, 0, 0 ] >;
export type MagneticFieldStrengthDim = DimDef< [ 0, -1, 0, 1, 0, 0, 0 ] >;
export type MagneticPermeabilityDim = DimDef< [ -2, 1, 1, -2, 0, 0, 0 ] >;
export type ElectricPermittivityDim = DimDef< [ 4, -3, -1, 2, 0, 0, 0 ] >;
export type ElectricDipoleMomentDim = DimDef< [ 1, 1, 0, 1, 0, 0, 0 ] >;
export type MagneticDipoleMomentDim = DimDef< [ 0, 2, 0, 1, 0, 0, 0 ] >;

// Optics & Radiometry
export type LuminousFluxDim = DimDef< [ 0, 0, 0, 0, 0, 0, 1 ] >;
export type IlluminanceDim = DimDef< [ 0, -2, 0, 0, 0, 0, 1 ] >;
export type LuminanceDim = DimDef< [ 0, -2, 0, 0, 0, 0, 1 ] >;
export type IrradianceDim = DimDef< [ -3, 0, 1, 0, 0, 0, 0 ] >;
export type RadiantIntensityDim = PowerDim;
export type RadianceDim = IrradianceDim;

// Chemistry
export type MolarMassDim = DimDef< [ 0, 0, 1, 0, 0, -1, 0 ] >;
export type MolarVolumeDim = DimDef< [ 0, 3, 0, 0, 0, -1, 0 ] >;
export type MolarEnergyDim = DimDef< [ -2, 2, 1, 0, 0, -1, 0 ] >;
export type MolarEntropyDim = DimDef< [ -2, 2, 1, 0, -1, -1, 0 ] >;
export type MolarHeatCapacityDim = MolarEntropyDim;
export type ConcentrationDim = DimDef< [ 0, -3, 0, 0, 0, 1, 0 ] >;
export type CatalyticActivityDim = DimDef< [ -1, 0, 0, 0, 0, 1, 0 ] >;

// Radiology
export type ActivityDim = FrequencyDim;
export type AbsorbedDoseDim = DimDef< [ -2, 2, 0, 0, 0, 0, 0 ] >;
export type DoseEquivalentDim = AbsorbedDoseDim;
export type ExposureDim = DimDef< [ 1, 0, -1, 1, 0, 0, 0 ] >;
