'use client';

import { Input } from '~/src/app/shared/components/Input';
import { Template } from '~/src/app/shared/components/Template';
import { Title } from '~/src/app/shared/components/Title';
import { CiDeliveryTruck } from 'react-icons/ci';
import { IoIosPhonePortrait } from 'react-icons/io';
import { BiSolidCity } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';

export function SupplierInformation() {
  return (
    <Template direction="col">
      <Title title="Informações do Fornecedor" as="h2" color="white" size="lg" weight="light" />
      <div className="flex flex-wrap gap-5">
        <Input.root field="supplier">
          <Input.field name="supplier" placeholder="Nome do fornecedor atual" />
          <Input.label label="Nome" name="supplier" />
          <Input.representation icon={CiDeliveryTruck} />
          <Input.error field="supplier" />
        </Input.root>

        <Input.root field="contactNumber">
          <Input.field max={15} maxLength={15} name="contactNumber" placeholder="(00) 90000-0000" />
          <Input.label label="Número de contato" name="contactNumber" />
          <Input.representation icon={IoIosPhonePortrait} />
          <Input.error field="contactNumber" />
        </Input.root>
      </div>

      <Input.root field="supplierCNPJ">
        <Input.field max={17} maxLength={17} name="supplierCNPJ" placeholder="Qual o CNPJ?" />
        <Input.label label="cnpj" name="supplierCNPJ" />
        <Input.representation icon={BiSolidCity} />
        <Input.error field="supplierCNPJ" />
      </Input.root>

      <Input.root size="full" field="email">
        <Input.field fildSize="full" type="email" name="email" placeholder="Qual o Email?" />
        <Input.label label="E-mail" name="email" />
        <Input.representation icon={MdOutlineEmail} />
        <Input.error field="email" />
      </Input.root>
    </Template>
  );
}
