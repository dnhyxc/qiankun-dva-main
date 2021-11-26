// 微前端基座主应用实例化
import { routes } from '@/constants';
import { DEFAULT_HOME } from '@/frameConfig/config';
import render from './render/RenderApp';
import * as appController from './controller/app';

// 事件通信
// import './eventBus';
// 注册微应用并启动微前端
import appStart from './appRegister';

if (location.pathname === '/') {
  location.href = DEFAULT_HOME;
} else {
  // 获取用户信息 然后再渲染子应用
  appController.beforeMount().then((success: boolean) => {
    if (success) {
      // 进行匹配与路由拦截
      appController.afterMount();
      // 注册微应用并启动微前端
      appStart();
    } else {
      render(routes.login);
    }
  });
}
