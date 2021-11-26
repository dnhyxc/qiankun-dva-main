/**
 * 启动qiankun应用间通信机制
 * 主应用是从qiankun中导出的initGlobalState方法，
 * 子应用是附加在props上的onGlobalStateChange, setGlobalState方法（只用主应用注册了通信才有）
 */
import { initGlobalState, MicroAppStateActions } from 'qiankun';
import { isEqual } from 'lodash';
import store from './store';

export const actions: MicroAppStateActions = initGlobalState({});

(window as any).__MAIN_GLOBALSTATE_ACTIONS__ = actions;

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('[onGlobalStateChange - master]:', state, prev);
  // 数据变更来自自应用
  if (!isEqual(state, prev)) {
    store.dispatch({
      type: 'auth/setAuthInfo',
      payload: {
        ...state,
      },
    });

    console.log('数据变更来自自应用');
  }
});
