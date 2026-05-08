import type { ElectricCurrentDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const planckCurrent = 'IP' as UnitRef< ElectricCurrentDim, 'IP' >;

export default ( {
  id: planckCurrent,
  dim: [ 0, 0, 0, 1, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 3.4789e25
  },
  prefixable: false,
  unitSystem: [ 'natural', 'natural/planck' ],
  aliases: [ 'planck current' ],
  meta: {
    symbol: {
      default: [ {
        context: 'standard',
        ascii: 'IP',
        unicode: 'Iₚ',
        latex: 'I_{\\mathrm{P}}'
      } ]
    },
    name: {
      en: [ 'Planck current' ],
      de: [ 'Planck-Strom' ]
    },
    description: {
      en: 'Standard unit of electric current in the Planck units system',
      de: 'Standardeinheit der elektrischen Stromstärke im Planck-Einheitensystem'
    }
  }
} ) as const satisfies UnitDef< ElectricCurrentDim, typeof planckCurrent >;
