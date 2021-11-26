// 是否为服务端本地调试
export const IS_LOCAL = location.hostname.startsWith('local.');

// 是否是开发模式
export const IS_DEV = location.hostname.startsWith('dev.');

// 是否是测试模式
export const IS_TEST = location.hostname.startsWith('test.');

// 是否是预发模式
export const IS_PRE = location.hostname.startsWith('pre.');

const getHostOptions = () => {
  let env = 'prod';
  if ((window as any).__VPC__) {
    env = 'vpc';
  } else if (IS_LOCAL) {
    env = 'local';
  } else if (IS_DEV || IS_TEST) {
    env = IS_DEV ? 'dev' : 'test';
  } else if (IS_PRE) {
    env = 'pre';
  }
  return {
    ENV: env,
  };
};

export const { ENV } = getHostOptions();
