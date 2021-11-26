/* eslint-disable camelcase */
import { RegistrableApp } from 'qiankun';
// import store from "@/frameCore/store";
import {
  APP_LIST,
  APP_CONTAINER,
  DEFAULT_HOME,
  DEFAULT_LOGIN,
} from '@/frameConfig/config';
import { routes } from '@/constants';
import render from '@/frameCore/render/RenderApp';

/**
 * 前置初始化信息
 */
export const beforeMount = async () => {
  console.log('TODO: app.beforeMount');
  const routerBase: any = {};
  (APP_LIST || []).forEach((i) => {
    routerBase[i.key] = i.routerBase;
  });

  // 1..获取用户信息
  const resultUser: any = {
    success: true,
  };
  return resultUser?.success || false;

  // const storePayload: any = {
  //   // 机构配置
  //   organization: {},
  //   // 用户信息
  //   user: {},
  //   // 权限点
  //   power: {},
  //   // 其他通用配置
  //   options: {
  //     routerBase,
  //   },
  // };
  // 1.TODO 处理全局环境
  // const resultOrganization: any = await authController.getEnterprise();
  // storePayload.organization = resultOrganization?.data || {};
  // 2.获取用户信息
  // const resultUser: any = await authController.getUserInfo();
  // storePayload.user = resultUser?.data || {};
  // 3.处理用户策略
  // const resultPower: any = await authController.getPowerPolicy({
  //   user: storePayload.user,
  //   organization: storePayload.organization,
  // });
  // storePayload.power = resultPower?.data || {};
  // storePayload.originPower = resultPower?.originData || {};
  // console.log('storePayload: ', storePayload);
  // await store.dispatch({
  //   type: 'auth/updateState',
  //   payload: storePayload,
  // });
  // return resultUser?.success || false;
};

/**
 * 后置初始化信息
 */
export const afterMount = async () => {
  // 微前端基座主应用实例化
  if (location.pathname === DEFAULT_LOGIN) {
    location.href = DEFAULT_HOME;
  } else if (location.pathname === '/dnhyxc/account') {
    render(routes.account);
  } else if (location.pathname === '/dnhyxc/test') {
    render(routes.test);
  } else {
    render(routes.notfound);
  }
};

/**
 * 处理子应用列表
 */
export const getAppList = () => {
  // 声明子应用挂载dom
  const appContainer = APP_CONTAINER;
  const loader = (loading: boolean) => render({ loading });
  // 处理子应用注册表
  const apps: Array<RegistrableApp<any>> = APP_LIST.map((i: any) => {
    return {
      name: i.key,
      entry: i.entry,
      activeRule: i.routerBase,
      container: appContainer,
      loader,
      props: {
        routerBase: i.routerBase,
        info: i.props?.info,
      },
    };
  });

  return apps;
};

/**
 * 子应用销毁判断
 */
export const afterUnmount = async () => {
  if (location.pathname === '/dnhyxc/account') {
    render(routes.account);
  }
  if (location.pathname === '/dnhyxc/test') {
    render(routes.test);
  }
};
