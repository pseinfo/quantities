import type { ElectricCurrentDim } from '../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../types/unit';

export const planckCurrent = 'IP' as UnitRef< ElectricCurrentDim, 'IP' >;

export default ( {
  id: planckCurrent,
  dim: [ 0, 0, 0, 1, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 3.479e25
  },
  prefixable: false,
  unitSystem: [ 'planck' ],
  aliases: [ 'Planck current' ],
  meta: {
    symbol: {
      default: {
        ascii: 'IP',
        unicode: 'Iₚ',
        latex: 'I_{\\mathrm{P}}'
      }
    },
    name: {
      en: [ 'Planck current' ],
      de: [ 'Planck-Strom' ]
    },
    description: {
      en: 'Planck unit of electric current',
      de: 'Planck-Einheit der elektrischen Stromstärke'
    }
  }
} ) as const satisfies UnitDef< ElectricCurrentDim, typeof planckCurrent >;
