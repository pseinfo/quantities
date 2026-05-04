import type { ConstantConfig } from '../../types/constant';

export default ( {
  id: 'reducedPlanckConstant',
  symbol: {
    plain: 'ℏ',
    latex: '\hbar'
  },
  name: {
    en: 'Reduced Planck constant',
    de: 'Reduzierte Planck-Konstante'
  },
  value: 1.054571817e-34,
  relUncertainty: 0,
  vector: [ -1, 2, 1, 0, 0, 0, 0 ],
  quantity: 'action',
  unit: 'jouleSecond'
} ) as const satisfies ConstantConfig;
