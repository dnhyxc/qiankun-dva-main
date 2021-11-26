import { DEFAULT_LOGIN } from '@/frameConfig/config';
import * as authServer from '@/baseModule/auth/services/auth';

// 退出登录
export const logout = async () => {
  const result: any = await authServer.logout();
  if (result.success) {
    location.href = DEFAULT_LOGIN;
  }
};

// 获取用户信息
export const getUserInfo = async () => {
  const result: any = await authServer.getUserInfo({ uid: 9002 });
  if (result.success) {
    const { data } = result;
    result.data = data;
  }
  return result;
};

/**
 * 获取当前用户权限和配置
 */
export const getPowerPolicy = async ({ user, organization }: any) => {};
