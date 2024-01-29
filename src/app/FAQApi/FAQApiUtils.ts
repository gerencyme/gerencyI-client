export interface FaqItem {
  id: number;
  title: string;
  text: string;
}

let id = 0;

export const faqItems: FaqItem[] = [
  {
    id: id++,
    title: 'GerencyI',
    text: `A GerencyI é uma startup brasileira fundada por dois desenvolvedores com anos de experiência no mercado.
    Nossa missão é transformar a experiência do gestor, tornando-a mais eficiente e agradável.`
  },
  {
    id: id++,
    title: 'Como funciona o mapeamento de estoque?',
    text: `
    O mapeamento de estoque é um processo que identifica grupos similares de necessidades de estoque. Para isso, o sistema leva em consideração fatores como o tipo de produto, a quantidade requerida, o fornecedor atual e os fornecedores próximos.`
  },
  {
    id: id++,
    title: 'Nosso MVP',
    text: `Nosso MVP está sendo pensado e lançado para dar qualidade de vida para os gestores de comércios e estabelecimentos. No futuro, incluiremos outros serviços, como autoatendimento e pagamento eficiente sem a necessidade de um funcionário, gestão automatizada com integração de inteligência artificial e muito mais está por vir, basta que confie no nosso serviço.`
  },
  {
    id: id++,
    title: 'Como esse serviço beneficia as empresas?',
    text: `A Gestão de Estoque da GerencyI oferece uma maneira mais inteligente e eficaz de gerenciar inventário. Ao identificar padrões e agrupar necessidades similares, conseguimos reduzir custos, aumentando a eficiência operacional das empresas.
    Por exemplo, conseguimos detectar empresas similares com pedidos semelhantes, agrupá-los e criar um único pedido, proporcionando o menor preço possível e gerando economia em escala de forma totalmente automática.`
  },
  {
    id: id++,
    title: 'Qual é o preço da GerencyI?',
    text: 'O produto base está, atualmente, em fase de teste, então o custo é 0. Após o período de teste, o preço será alterado de acordo com o tamanho da empresa e o volume de estoque. Para saber mais sobre os preços, entre em contato conosco.'
  }
];
