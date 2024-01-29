import { tv } from 'tailwind-variants';

export const monthlyExpenseHeaderTv = tv({
  base: 'flex gap-4 justify-between items-center'
});

export const monthlyExpenseTitleTv = tv({
  base: 'text-xs sm:text-sm md:text-md'
});

export const monthlyExpenseSecurityExpenseTv = tv({
  base: 'flex items-center gap-0.5 cursor-pointer'
});
