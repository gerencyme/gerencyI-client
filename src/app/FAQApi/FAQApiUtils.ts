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
    text: `Transformando a experiência do cliente em estabelecimentos comerciais!

    A GerencyI é uma startup brasileira fundada por três desenvolvedores com anos de experiência no mercado.
    Nossa missão é transformar a experiência do cliente em estabelecimentos comerciais, tornando-a mais rápida, eficiente e agradável.`
  },
  {
    id: id++,
    title: 'No que acreditamos?',
    text: `
    Acreditamos que o autoatendimento é o futuro dos estabelecimentos. Com nossa solução, queremos ajudar os donos de negócios a melhorar a experiência do cliente e aumentar a eficiência de suas operações.`
  },
  {
    id: id++,
    title: 'Nosso MVP',
    text: `Nosso MVP está sendo pensando e lançado em dispositivos móveis sem a necessidade de um download e incluirá os recursos básicos de pedido, acompanhamento de status e pagamento. No futuro, planejamos adicionar recursos adicionais, como gerenciamento de estoque automatizado e integração com inteligência artificial para eficiência do cliente com o pedido: o que gerará mais vendas para o estabelecimento.`
  },
  {
    id: id++,
    title: 'O que torna a GerencyI única?',
    text: `A GerencyI é a única solução de autoatendimento que oferece um dashboard completo para donos de estabelecimentos. Nosso dashboard fornece informações em tempo real sobre o status das mesas, pedidos e vendas, além de dados do cliente para reconhecimento único. Isso permite que os donos de estabelecimentos tomem decisões mais informadas sobre como gerenciar seus negócios.`
  },
  {
    id: id++,
    title: 'Como funciona o App?',
    text: `O aplicativo de autoatendimento da GerencyI é simples e fácil de usar. Os clientes podem fazer pedidos, acompanhar o status de seus pedidos e pagar sem interação humana. O aplicativo também oferece uma variedade de recursos para donos de estabelecimentos, incluindo um dashboard completo, status do pedido e notificações de pedido pronto, além da segurança com uma relação direta com cada cliente.
    `
  },
  {
    id: id++,
    title: 'O que queremos que você faça?',
    text: `Você pode consultar agora mesmo e tirar todas as dúvidas, incluindo todo o sistema de instalação e publicação do seu cardápido. Entre em contato e veja o quão fácil sua vida ficará com a GerencyI no comando do seu estabelecimento!
    `
  }
];
