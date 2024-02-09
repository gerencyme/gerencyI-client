import { format as formatter } from 'date-fns';

export const formateDate = (date: string | Date, format?: string) => {
  const defaultFormat = 'dd/MM/yyyy';

  const parsedDate = new Date(date);

  const formattedDate = formatter(parsedDate, format ?? defaultFormat);

  console.log(formattedDate);

  return formattedDate;
};
