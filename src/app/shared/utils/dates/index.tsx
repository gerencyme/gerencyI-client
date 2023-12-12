import { format as formatter } from 'date-fns';

export const formateDate = (date: number | Date, format?: string) => {
  const defaultFormat = 'dd/MM/yyyy';

  return formatter(date, format ?? defaultFormat);
};
