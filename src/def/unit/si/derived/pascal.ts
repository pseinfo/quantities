import type { PressureDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { meter } from '../base/meter';
import { newton } from './newton';

export const pascal = 'Pa' as UnitRef< PressureDim, 'Pa' >;

export default ( {
  id: pascal,
  dim: [ -2, -1, 1, 0, 0, 0, 0 ],
  structure: [ {
    unit: newton,
    exp: 1
  }, {
    unit: meter,
    exp: -2
  } ],
  conversion: 1,
  prefixable: true,
  aliases: [ 'pascal', 'pascals' ],
  context: {
    system: [ 'si' ],
    si: 'derived',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'Pa',
      canonical: true,
      format: {
        plain: 'Pa',
        latex: '\\mathrm{Pa}'
      }
    } ],
    name: {
      en: [ 'pascal', 'pascals' ],
      de: [ 'Pascal' ]
    },
    description: {
      en: 'derived SI unit of pressure and stress',
      de: 'abgeleitete SI-Einheit des Drucks und der mechanischen Spannung'
    }
  }
} ) as const satisfies UnitDef< PressureDim, typeof pascal >;
