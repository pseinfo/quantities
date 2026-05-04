import type { ConstantConfig } from '../../types/constant';

export default ( {
  id: 'gravitationConstant',
  symbol: {
    plain: 'G',
    latex: 'G'
  },
  name: {
    en: 'Newtonian constant of gravitation',
    de: 'Gravitationskonstante'
  },
  value: 6.6743015e-11,
  relUncertainty: 2.2e-5,
  vector: [ -2, 3, -1, 0, 0, 0, 0 ],
  unit: 'cubicMeterPerKilogramPerSecondSquared'
} ) as const satisfies ConstantConfig;
