import {
  registerMicroApps,
  runAfterFirstMounted,
  start,
  addGlobalUncaughtErrorHandler,
  RegistrableApp,
  initGlobalState,
} from 'qiankun';
import { routes } from '@/constants';
import * as appController from './controller/app';
import render from './render/RenderApp';

// 启动qiankun微前端应用方法
const appStart = () => {
  // 声明子应用列表
  const apps: Array<RegistrableApp<any>> = appController.getAppList();

  // 注册子应用
  registerMicroApps(apps, {
    beforeLoad: [
      (app) => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app);
        return Promise.resolve();
      },
    ],
    beforeMount: [
      (app) => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app);
        return Promise.resolve();
      },
    ],
    afterMount: [
      (app) => {
        console.log('[LifeCycle] after mount %c%s', 'color: green;', app);
        return Promise.resolve();
      },
    ],
    beforeUnmount: [
      (app) => {
        console.log('[LifeCycle] before unmount %c%s', 'color: green;', app);
        return Promise.resolve();
      },
    ],
    afterUnmount: [
      (app) => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app);
        appController.afterUnmount();
        return Promise.resolve();
      },
    ],
  });

  // 启动微前端
  start();

  // 微前端启动进入第一个子应用后回调函数
  runAfterFirstMounted(() => {
    console.log('[MainApp] first app mounted');
  });

  // 全局的未捕获异常处理器
  addGlobalUncaughtErrorHandler((event) => {
    console.error('异常捕获', event);
    const { message } = event as any;
    const errorApp: any = [];
    apps.forEach((i) => {
      if (message && message.includes(i.name)) {
        errorApp.splice(0, 1, i);
      }
    });
    // 加载失败时提示
    if (
      message &&
      message.includes('died in status LOADING_SOURCE_CODE') &&
      errorApp.length &&
      window.location.pathname === errorApp[0].activeRule
    ) {
      render(routes.failed);
    }
  });

  // 启动应用间通信机制;
  initGlobalState({
    name: 'Qiankun-Dva',
  });
};

// 启动应用
export default appStart;
