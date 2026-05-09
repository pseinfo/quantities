import type { VoltageDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

import { coulomb } from './coulomb';
import { joule } from './joule';

export const volt = 'V' as UnitRef< VoltageDim, 'V' >;

export default ( {
  id: volt,
  dim: [ -3, 2, 1, -1, 0, 0, 0 ],
  structure: [ {
    unit: joule,
    exp: 1
  }, {
    unit: coulomb,
    exp: -1
  } ],
  conversion: 1,
  prefixable: true,
  aliases: [ 'volt', 'volts' ],
  context: {
    system: [ 'si' ],
    si: 'derived',
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'V',
      canonical: true,
      format: {
        plain: 'V',
        latex: '\\mathrm{V}'
      }
    } ],
    name: {
      en: [ 'volt', 'volts' ],
      de: [ 'Volt' ]
    },
    description: {
      en: 'derived SI unit of voltage and electric potential',
      de: 'abgeleitete SI-Einheit der elektrischen Spannung und des elektrischen Potentials'
    }
  }
} ) as const satisfies UnitDef< VoltageDim, typeof volt >;
