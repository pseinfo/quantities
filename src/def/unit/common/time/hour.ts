import type { TimeDim } from '../../../../types/dimension';
import type { UnitDef, UnitId } from '../../../../types/unit';

export type hour = UnitDef< TimeDim, 'hour' >;

export default ( {
  id: 'hour' as UnitId< 'hour' >,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 3600
  },
  prefixable: false,
  unitSystem: [ 'common' ],
  category: [ 'accepted' ],
  aliases: [ 'hours' ],
  meta: {
    symbol: {
      default: {
        ascii: 'h',
        latex: '\\mathrm{h}'
      }
    },
    name: {
      en: [ 'hour', 'hours' ],
      de: [ 'Stunde', 'Stunden' ]
    },
    description: {
      en: 'accepted unit of time, equal to 3600 seconds',
      de: 'akzeptierte Zeiteinheit, gleich 3600 Sekunden'
    }
  }
} ) as const satisfies hour;
