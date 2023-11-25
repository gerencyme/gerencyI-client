export const APP_ROUTES = {
  private: {
    'my-account': {
      name: '/my-account',
      label: 'Minha Conta'
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
    }
  },
  publicPaths: {
    auth: '/auth',
    register: '/register'
  }
};
