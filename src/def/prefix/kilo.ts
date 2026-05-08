import { PrefixDef, PrefixRef } from '../../types/prefix';

export const kilo = 'k' as PrefixRef< 'k' >;

export default ( {
  id: kilo,
  factor: 1000,
  aliases: [ 'kilo' ],
  meta: {
    symbol: {
      default: [ {
        context: 'standard',
        ascii: 'k',
        latex: '\\mathrm{k}'
      } ]
    },
    name: {
      en: [ 'kilo' ],
      de: [ 'Kilo' ]
    },
    description: {
      en: 'unit prefix with the factor 1000',
      de: 'Einheitenpräfix mit dem Faktor 1000'
    }
  }
} ) as const satisfies PrefixDef< typeof kilo >;
