export type TCompanySupplier = {
  supplierId: string;
  nome: string;
  cnpj: string;
  endereco: string;
  email: string;
  telephone: string;
};

export type TZipCode = {
  code: string;
  street: string;
  number: string;
  streetType: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  complement: string;
  fullAddress: string;
};

export type TUserResponse = {
  id: string;
  token: string;
  refreshToken: string;
  email: string;
  cnpj: string;
  corporateReason: string;
  name: string;
  companyImg: string;
  telephone: string;
  updateDate: string;
  zipCode: TZipCode;
  supplier: TCompanySupplier;
};
