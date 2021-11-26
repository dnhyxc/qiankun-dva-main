import watch from 'redux-watch';
import { actions as globalStateActions } from '../appStore';
import dva from './dva';
// import modelSet from '@/frameConfig/model';

const dvaApp = dva.createApp({
  initialState: {},
  // models: modelSet,
  redux: {
    devtoolOptions: {
      name: 'Micro-Host',
    },
  },
});

const store = dvaApp.getStore();

export default store;

const w = watch(store.getState, 'auth');
store.subscribe(w((newVal: any, oldVal: any, objectPath: any) => {
  // console.warn('%s changed from %s to %s', objectPath, oldVal, newVal);
  // console.warn('newVal', newVal);
  if (oldVal !== newVal) {
    globalStateActions.setGlobalState({
      ...newVal,
    });
  }
}));
