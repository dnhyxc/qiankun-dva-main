import authModel from './auth/models/index';
import { AuthModelState } from './auth/models/type';

// 注册模块 model 列表
export const modelSet: any[] = [authModel];

// 注册模块 model 类型
export interface modelType {
  auth: AuthModelState;
}
