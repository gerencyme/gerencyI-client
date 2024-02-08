export const APP_ROUTES = {
  private: {
    favorites: {
      name: '/favorites',
      label: 'Favoritos'
    },
    'my-account': {
      name: '/my-account',
      label: 'Minha Conta'
    },
    'my-data': {
      name: '/my-data',
      label: 'Meus dados'
    },
    'last-months': {
      name: '/last-months',
      label: 'Últimos meses'
    },
    'inventory-control': {
      name: '/inventory-control',
      label: 'Painel'
    },
    'new-order': {
      name: '/new-order',
      label: 'Novo Pedido'
    }
  },
  public: {
    home: {
      name: '/',
      label: 'Início'
    },
    auth: {
      name: '/auth',
      label: 'Entrar'
    },
    register: {
      name: '/register',
      label: 'Registre-se'
    },
    products: {
      name: '/products',
      label: 'Produtos'
    }
  },
  publicPaths: {
    auth: '/auth',
    register: '/register',
    products: '/products'
  }
};
