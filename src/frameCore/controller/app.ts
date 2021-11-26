import * as appController from '@/frameConfig/controller/app';

/**
 * 前置初始化信息
 */
export const beforeMount = () => appController.beforeMount();

/**
 * 后置初始化信息
 */
export const afterMount = () => appController.afterMount();

/**
 * 处理子应用列表
 */
export const getAppList = () => appController.getAppList();

/**
 * 子应用销毁判断
 */
export const afterUnmount = () => appController.afterUnmount();
