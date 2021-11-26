/**
 * 主应用来源标识
 */
export const FRAME_SOURCE = 'dnhyxc-main';

/**
 * 设置应用主题
 */
export const FRAME_THEME = 'default';

/**
 * 设置首页地址
 */
export const DEFAULT_HOME = '/dnhyxc/react';

/**
 * 设置登录页面
 */
export const DEFAULT_LOGIN = '/dnhyxc/login';

/**
 * 设置子应用挂载dom的Id
 */
export const APP_CONTAINER_ID = 'sub-app-viewport';

/**
 * 设置子应用挂载dom
 */
export const APP_CONTAINER = `#${APP_CONTAINER_ID}`;

/**
 * 设置容器样式
 */
export const CONTAINER_STYLE = {
  minWidth: 1280,
  maxWidth: 1920,
  padding: '0 24px',
  margin: '0 auto',
};

/**
 * 子应用注册列表
 */
export const APP_LIST = [
  {
    key: 'micro-react',
    title: 'sub-react',
    routerBase: '/dnhyxc/react',
    // entry: `${location.origin}/app/subApp/live-app`,
    entry: '//localhost:8989',
    props: {
      info: '来了大哥',
    },
  },
  {
    key: 'micro-vue',
    title: 'sub-vue',
    routerBase: '/dnhyxc/vue',
    // entry: `${location.origin}/app/subApp/live-app`,
    entry: '//localhost:8686',
  },
];
