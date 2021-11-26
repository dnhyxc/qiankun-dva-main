import { get, post } from '@/utils/request';

const logout = () => {
  return get('/api/logout');
};

const getUserInfo = ({ uid }: { uid: number }) => {
  post('/api/getUserInfo', { uid });
};

export { logout, getUserInfo };
