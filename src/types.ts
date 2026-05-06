export enum System {
  SI = 'SI',
  CGS = 'CGS'
}

export type SIDimension = readonly [
  T: number, // time
  L: number, // length
  M: number, // mass
  I: number, // electric current
  θ: number, // temperature
  N: number, // amount
  J: number  // luminous intensity
];

export type CGSDimension = readonly [
  T: number, // time
  L: number, // length
  M: number, // mass
];

export type Dimension< S extends System > =
  S extends System.SI ? SIDimension :
  S extends System.CGS ? CGSDimension :
  never;
