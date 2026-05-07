import type { TemperatureDim } from '../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../types/unit';

export const planckTemp = 'TP' as UnitRef< TemperatureDim, 'TP' >;

export default ( {
  id: planckTemp,
  dim: [ 0, 0, 0, 0, 1, 0, 0 ],
  structure: [],
  conversion: {
    factor: 1.41678416e32,
    uncertainty: 1.1e-5
  },
  prefixable: false,
  unitSystem: [ 'planck' ],
  aliases: [ 'planck temperature' ],
  meta: {
    symbol: {
      default: {
        ascii: 'TP',
        latex: 'T_{\\mathrm{P}}'
      }
    },
    name: {
      en: [ 'Planck temperature' ],
      de: [ 'Planck-Temperatur' ]
    },
    description: {
      en: 'Smallest meaningful unit of temperature; Planck units',
      de: 'Kleinste sinnvolle Temperatureinheit; Planck-Einheiten'
    }
  }
} ) as const satisfies UnitDef< TemperatureDim, typeof planckTemp >;
