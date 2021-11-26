export default {
  login: { loading: false, type: 'login', needHeader: false },
  failed: {
    loading: false,
    type: 'error',
    content: '哦豁！应用加载失败，请检查应用是否可运行',
  },
  notfound: {
    loading: false,
    type: 'notfound',
    content: '404 您要找的页面已经飞走了...',
  },
  account: {
    loading: false,
    type: 'account',
    config: {
      id: 'account',
      title: '账号设置',
      url: '/dnhyxc/account',
      icon: 'account',
    },
  },
  test: {
    loading: false,
    type: 'test',
    config: {
      id: 'test',
      title: '测试页面',
      url: '/dnhyxc/test',
    },
  },
};
