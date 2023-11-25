export const capitalizeName = (str: string) => {
  return str
    .trim()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export function maskCpfOrCnpj(value: string) {
  if (!value) return;

  value = value.replace(/\D/g, '');
  if (value.length > 13) {
    value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d)/, '$1.$2.$3/$4-$5');
  } else {
    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4');
  }

  return value;
}
