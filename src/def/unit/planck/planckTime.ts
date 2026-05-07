import type { TimeDim } from '../../../types/dimension';
import type { UnitDef, UnitId } from '../../../types/unit';

export const tp = 'tp' as UnitId< 'tP' >;

export default ( {
  id: tp,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 5.39124760e-44
  },
  prefixable: false,
  unitSystem: [ 'planck' ],
  aliases: [ 'planck time' ],
  meta: {
    symbol: {
      default: {
        ascii: 'tP',
        latex: 't_{\\mathrm{P}}'
      }
    },
    name: {
      en: [ 'Planck time' ],
      de: [ 'Planck-Zeit' ]
    },
    description: {
      en: 'Smallest meaningful unit of time, Planck units.',
      de: 'Kleinste sinnvolle Zeiteinheit, Planck-Einheiten.'
    }
  }
} ) as const satisfies UnitDef< TimeDim, 'tP' >;
