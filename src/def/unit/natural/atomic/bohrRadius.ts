import type { LengthDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const bohrRadius = 'a0' as UnitRef< LengthDim, 'a0' >;

export default ( {
  id: bohrRadius,
  dim: [ 0, 1, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 5.2917721054482e-11,
    uncertainty: 1.6e-10
  },
  prefixable: false,
  unitSystem: [ 'natural', 'natural/atomic' ],
  aliases: [ 'bohr radius' ],
  meta: {
    symbol: {
      default: [ {
        context: 'standard',
        ascii: 'a0',
        latex: 'a_{0}'
      } ]
    },
    name: {
      en: [ 'Bohr radius' ],
      de: [ 'Bohrscher Radius' ]
    },
    description: {
      en: 'Mean distance between the nucleus and the electron in a hydrogen atom in its ground state; atomic units',
      de: 'Mittlere Entfernung zwischen Kern und Elektron im Grundzustand eines Wasserstoffatoms; Atomare Einheiten'
    }
  }
} ) as const satisfies UnitDef< LengthDim, typeof bohrRadius >;
