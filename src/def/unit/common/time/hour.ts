import type { TimeDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const hour = 'hour' as UnitRef< TimeDim, 'hour' >;

export default ( {
  id: hour,
  dim: [ 1, 0, 0, 0, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 3600
  },
  prefixable: false,
  aliases: [ 'hour', 'hours' ],
  context: {
    system: [ 'common', 'si' ],
    si: 'accepted',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'h',
      canonical: true,
      context: {
        system: [ 'common', 'si' ]
      },
      format: {
        plain: 'h',
        latex: '\\mathrm{h}'
      }
    }, {
      id: 'hr',
      context: {
        system: [ 'common', 'si' ]
      },
      format: {
        plain: 'hr',
        latex: '\\mathrm{hr}'
      }
    } ],
    name: {
      en: [ 'hour', 'hours' ],
      de: [ 'Stunde', 'Stunden' ]
    },
    description: {
      en: 'accpeted unit of time, equal to 3600 seconds',
      de: 'akzeptierte Zeiteinheit, gleich 3600 Sekunden'
    }
  }
} ) as const satisfies UnitDef< TimeDim, typeof hour >;
