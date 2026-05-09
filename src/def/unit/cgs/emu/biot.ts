import type { ElectricCurrentDim } from '../../../../types/dimension';
import type { UnitDef, UnitRef } from '../../../../types/unit';

export const biot = 'Bi' as UnitRef< ElectricCurrentDim, 'Bi' >;

export default ( {
  id: biot,
  dim: [ 0, 0, 0, 1, 0, 0, 0 ],
  structure: [],
  conversion: {
    factor: 10
  },
  prefixable: false,
  aliases: [ 'biot', 'biots', 'abA', 'abampere', 'abamperes' ],
  context: {
    system: [ 'cgs', 'cgs_emu' ],
    status: 'active'
  },
  meta: {
    symbol: [ {
      id: 'Bi',
      canonical: true,
      context: {
        system: [ 'cgs', 'cgs_emu' ]
      },
      format: {
        plain: 'Bi',
        latex: '\\mathrm{Bi}'
      }
    }, {
      id: 'abA',
      context: {
        system: [ 'cgs', 'cgs_emu' ]
      },
      format: {
        plain: 'abA',
        latex: '\\mathrm{abA}'
      }
    } ],
    name: {
      en: [ 'abampere', 'abamperes' ],
      de: [ 'Biot' ]
    },
    description: {
      en: 'CGS unit of electric current, equal to 10 amperes',
      de: 'CGS-Einheit der elektrischen Stromstärke, gleich 10 Ampere'
    }
  }
} ) as const satisfies UnitDef< ElectricCurrentDim, typeof biot >;
