import type { MassDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const atomicMass = 'u' as UnitRef< MassDim, 'u' >;

export default ( {
  id: atomicMass,
  dim: [ 0, 0, 1, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 1.6605390689252e-24
  },
  prefixable: false,
  unitSystem: [ 'natural', 'natural/atomic' ],
  category: [ 'accepted' ],
  aliases: [ 'unified atomic mass unit', 'atomic mass unit', 'atomic mass', 'dalton', 'Da' ],
  meta: {
    symbol: {
      default: [ {
        context: 'standard',
        ascii: 'u',
        latex: '\\mathrm{u}'
      }, {
        context: 'alternative',
        ascii: 'Da',
        latex: '\\mathrm{Da}'
      } ]
    },
    name: {
      en: [ 'unified atomic mass unit', 'unified atomic mass units' ],
      de: [ 'Atomare Masseneinheit', 'Atomare Masseneinheiten' ]
    },
    description: {
      en: 'Standard unit of mass that quantifies the mass of an atom or molecule; atomic units',
      de: 'Standard-Maßeinheit zur Quantifizierung der Masse eines Atoms oder Moleküls; Atomare Einheiten'
    }
  }
} ) as const satisfies UnitDef< MassDim, typeof atomicMass >;
