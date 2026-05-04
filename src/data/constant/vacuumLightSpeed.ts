import type { ConstantConfig } from '../../types/constant';

export default ( {
  id: 'vacuumLightSpeed',
  symbol: {
    plain: 'c',
    latex: 'c'
  },
  name: {
    en: 'speed of light in vacuum',
    de: 'Lichtgeschwindigkeit im Vakuum'
  },
  value: 299792458,
  relUncertainty: 0,
  vector: [ -1, 1, 0, 0, 0, 0, 0 ],
  quantity: 'velocity',
  unit: 'meterPerSecond'
} ) as const satisfies ConstantConfig;
