export interface RegisterRequest {
  id: string;
  email: string;
  cnpj: string;
  corporateReason: string;
  name: string;
  creationDate: Date;
  updateDate: Date;
  password: string;
  confirmPassword: string;
}
