import { FilterOptions } from '~shared/types/FilterOptions';
import { KeyValue } from '../../shared/types/KeyValue';

export const filterMonthsOptions: FilterOptions[] = [
  { id: 1, label: 'janeiro' },
  { id: 2, label: 'fevereiro' },
  { id: 3, label: 'março' },
  { id: 4, label: 'abril' },
  { id: 5, label: 'maio' },
  { id: 6, label: 'junho' },
  { id: 7, label: 'julho' },
  { id: 8, label: 'agosto' },
  { id: 9, label: 'setembro' },
  { id: 10, label: 'outubro' },
  { id: 11, label: 'novembro' },
  { id: 12, label: 'dezembro' }
];

export const filterStatusOptions: FilterOptions[] = [
  { id: 13, label: 'todos', value: 'todos' },
  { id: 14, label: 'done', value: 'concluído' },
  { id: 15, label: 'canceled', value: 'cancelado' },
  { id: 16, label: 'underAnalysis', value: 'em análise' }
];

export const portugueseStatus: KeyValue = {
  todos: 'todos os Status',
  done: 'concluído',
  canceled: 'cancelado',
  underAnalysis: 'em análise'
};
