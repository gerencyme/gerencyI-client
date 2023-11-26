interface Password {
  password: string;
  confirmPassword: string;
}

export interface RegisterUser {
  email: string;
  cnpj: string;
  corporateReason: string;
  name: string;
  password: Password;
}
