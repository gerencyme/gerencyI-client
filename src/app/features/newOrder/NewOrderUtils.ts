import { z } from 'zod';
import { defaultMessage } from '~utils/constants/comumRegisterAndAuth';
import { OrderInformation } from '../../shared/types/OrderInformation';

export const newOrderSchema = z.object({
  productName: z.string().nonempty(`${defaultMessage} o nome do produto`).toLowerCase(),
  productBrand: z.string().nonempty(`${defaultMessage} o nome do produto`).toLowerCase(),
  productType: z.string().nonempty(`${defaultMessage} o tipo do produto`).toLowerCase(),
  quantity: z.coerce.number().positive().min(10, 'Mínimo: 10').max(1000, 'Máximo: 1000')
});

export type TNewOrderSchema = z.infer<typeof newOrderSchema>;

export const infos: OrderInformation[] = [
  {
    id: 0,
    infoText:
      'Ao realizar seu pedido, ele será armazenado em nosso banco de dados e entrará em análise. Esta análise ocorre durante 1 dia, por isso recomendamos que você faça seu pedido com antecedência.'
  },
  {
    id: 1,
    infoText:
      'Durante este período, nosso sistema identifica pedidos semelhantes ao seu e os integra. Isso nos permite comparar preços de diferentes fornecedores e encontrar o melhor preço para você, com base na sua região e nas suas necessidades.'
  },
  {
    id: 2,
    infoText:
      'É importante ressaltar que, caso seja seu primeiro pedido, o preço será estabelecido após uma profunda análise para encontrarmos a melhor solução para o bolso da sua empresa. Caso contrário, um valor será exibido com base no seu último pedido após realizar o pedido.'
  }
];
