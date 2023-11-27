import { SegmentCardOptions } from '../../shared/types/SegmentCardOptions';
import Network from '~assets/segmentCardOptions/network.svg';
import Database from '~assets/segmentCardOptions/database.svg';
import Profit from '~assets/segmentCardOptions/profit.svg';

export const segmentCardOptions: SegmentCardOptions[] = [
  {
    src: Network,
    optionTitle: 'Conecte-se',
    optionDescription: 'Junte-se à rede da GerencyI'
  },
  {
    src: Database,
    optionTitle: 'Atualize',
    optionDescription: 'Mantenha sua base atualizada'
  },
  {
    src: Profit,
    optionTitle: 'Descanse',
    optionDescription: 'Nosso sistema faz o resto por você!'
  }
];
