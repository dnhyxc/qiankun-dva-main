import { Model, createActionCreaters } from '@/utils/dva-ts-wrapper';
import { IGlobalState } from '@/frameConfig/models/state';
import {
  FRAME_SOURCE,
  FRAME_THEME,
  CONTAINER_STYLE,
} from '@/frameConfig/config';
import { host } from '@/constants';
import { AuthModelState } from './type';

interface ReducersPayloads {
  updateState: Partial<AuthModelState>;
}
interface EffectsPayloads {}

// 其他通用默认配置
const defaultOptions = {
  env: host.ENV,
  source: FRAME_SOURCE,
  theme: FRAME_THEME,
  containerStyle: CONTAINER_STYLE,
};

const initState: () => AuthModelState = () => {
  return {
    user: {}, // 用户
    power: {}, // 权限点
    organization: {}, // 机构配置
    options: {
      ...defaultOptions,
    }, // 其他通用配置
  };
};

const authModel: Model<
AuthModelState,
IGlobalState,
ReducersPayloads,
EffectsPayloads
> = {
  namespace: 'auth',
  state: initState(),
  subscriptions: {},
  effects: {},
  reducers: {
    // 处理系统消息
    updateState(state: AuthModelState, { payload }: any) {
      payload.options = { ...state.options, ...payload.options };
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default authModel;

export const authActions = createActionCreaters(authModel);
