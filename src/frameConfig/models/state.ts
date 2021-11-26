import { modelType as baseModelType } from '@/baseModule/model';

// 接口继承多个接口的前提是不能有冲突，即被继承的接口互相之间不能有相同的属性和方法的定义
export interface IGlobalState extends baseModelType {}

// 空数据兜底
export const emptyObj = {};
export const emptyArray = [];
