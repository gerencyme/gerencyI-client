interface ZipCode {
  code: string;
  street: string | null;
  number: string | null;
  streetType: string | null;
  neighborhood: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  complement: string | null;
  fullAddress: string;
}

interface Supplier {
  supplierId: string;
  nome: string | null;
  cnpj: string | null;
  endereco: string | null;
  email: string | null;
  telephone: string | null;
}

export interface CompanieRequest {
  id: string;
  token: string;
  email: string;
  cnpj: string;
  corporateReason: string;
  name: string;
  updateDate: string;
  zipCode: ZipCode;
  supplier: Supplier;
}
