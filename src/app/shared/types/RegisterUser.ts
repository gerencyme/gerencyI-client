interface Password {
  Password: string;
  ConfirmPassword: string;
}

export interface RegisterUser {
  Email: string;
  CNPJ: string;
  CorporateReason: string;
  Name: string;
  Password: Password;
}
