'use client';

import { Input } from '~/src/app/shared/components/Input';
import { Template } from '~/src/app/shared/components/Template';
import { Title } from '~/src/app/shared/components/Title';
import { IoIosPhonePortrait } from 'react-icons/io';
import { BiSolidCity } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';
import { LuUser } from 'react-icons/lu';
import { FiMapPin } from 'react-icons/fi';
import { FaMapMarked } from 'react-icons/fa';
import { FaCity } from 'react-icons/fa';
import { FaLaptopHouse } from 'react-icons/fa';
import { TbNumber } from 'react-icons/tb';
import { CiCirclePlus } from 'react-icons/ci';
import { useWindow } from '~/src/app/shared/hooks/useWindow';
import { myDataInputsContentTv } from '../MyDataTV';

export function PersonalInformation() {
  const { windowSize } = useWindow();

  const ufInputSize = windowSize.width < 648 ? 'full' : 'fit';
  const wrap = windowSize.width <= 648 ? 'wrap' : 'nowrap';

  return (
    <Template direction="col">
      <Title title="Informações Pessoais" as="h2" className="text-md pb-2" weight="light" />

      <div className={myDataInputsContentTv({ wrap })}>
        <Input.root field="personalName">
          <Input.field
            readOnly
            minLength={10}
            maxLength={100}
            name="personalName"
            placeholder="Qual o seu nome"
          />
          <Input.label label="Nome Completo" name="personalName" />
          <Input.representation icon={LuUser} />
          <Input.error field="personalName" />
        </Input.root>

        <Input.root field="personalCNPJ">
          <Input.field
            readOnly
            max={17}
            maxLength={17}
            name="personalCNPJ"
            placeholder="Qual o seu CNPJ?"
          />
          <Input.label label="CNPJ" name="personalCNPJ" />
          <Input.representation icon={BiSolidCity} />
          <Input.error field="personalCNPJ" />
        </Input.root>
      </div>

      <div className={myDataInputsContentTv({ wrap })}>
        <Input.root field="personalTelephone">
          <Input.field
            max={15}
            maxLength={15}
            name="personalTelephone"
            placeholder="(00) 90000-0000"
          />
          <Input.label label="Telefone Pessoal" name="personalTelephone" />
          <Input.representation icon={IoIosPhonePortrait} />
          <Input.error field="personalTelephone" />
        </Input.root>

        <Input.root field="zipCode">
          <Input.field max={9} maxLength={9} name="zipCode" placeholder="Qual seu CEP?" />
          <Input.label label="cep" name="zipCode" />
          <Input.representation icon={FiMapPin} />
          <Input.error field="zipCode" />
        </Input.root>
      </div>

      <div className={myDataInputsContentTv({ wrap })}>
        <Input.root field="UF" size={ufInputSize}>
          <Input.field max={2} maxLength={2} name="UF" placeholder="Seu UF?" />
          <Input.label label="UF" name="UF" />
          <Input.representation icon={FaMapMarked} />
          <Input.error field="UF" />
        </Input.root>

        <Input.root size="full" field="city">
          <Input.field type="city" name="city" placeholder="Qual sua cidade?" />
          <Input.label label="Cidade" name="city" />
          <Input.representation icon={FaCity} />
          <Input.error field="city" />
        </Input.root>
      </div>

      <div className={myDataInputsContentTv({ wrap })}>
        <Input.root field="adress">
          <Input.field name="adress" placeholder="Ex: Avenida um" />
          <Input.label label="Endereço" name="adress" />
          <Input.representation icon={FaLaptopHouse} />
          <Input.error field="adress" />
        </Input.root>

        <Input.root field="companieNumber">
          <Input.field
            type="companieNumber"
            name="companieNumber"
            placeholder="Qual o número de localização?"
          />
          <Input.label label="Número" name="companieNumber" />
          <Input.representation icon={TbNumber} />
          <Input.error field="companieNumber" />
        </Input.root>
      </div>

      <Input.root field="complement">
        <Input.field max={17} maxLength={17} name="complement" placeholder="Ex: APTO. 101" />
        <Input.label label="Complemento" name="complement" />
        <Input.representation icon={CiCirclePlus} />
        <Input.error field="complement" />
      </Input.root>

      <Input.root size="full" field="personalEmail">
        <Input.field
          readOnly
          type="personalEmail"
          name="personalEmail"
          placeholder="Qual seu e-mail?"
        />
        <Input.label label="E-mail" name="personalEmail" />
        <Input.representation icon={MdOutlineEmail} />
        <Input.error field="personalEmail" />
      </Input.root>
    </Template>
  );
}
