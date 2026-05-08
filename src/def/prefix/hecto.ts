import { PrefixDef, PrefixRef } from '../../types/prefix';

export const hecto = 'h' as PrefixRef< 'h' >;

export default ( {
  id: hecto,
  factor: 100,
  aliases: [ 'hecto' ],
  meta: {
    symbol: {
      default: [ {
        context: 'standard',
        ascii: 'h',
        latex: '\\mathrm{h}'
      } ]
    },
    name: {
      en: [ 'hecto' ],
      de: [ 'hekto' ]
    },
    description: {
      en: 'unit prefix with the factor 100',
      de: 'Einheitenpräfix mit dem Faktor 100'
    }
  }
} ) as const satisfies PrefixDef< typeof hecto >;
