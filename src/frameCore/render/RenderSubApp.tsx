import React from 'react';
import MRenderSubApp from '@/frameConfig/render/RenderSubApp';
import { APP_CONTAINER_ID } from '@/frameConfig/config';
import styles from './index.less';

/**
 * 渲染子应用相关
 * @param {*} props
 *
 */
const RenderSubApp = (props: any) => {
  return (
    <>
      <MRenderSubApp {...props} />
      <div id={APP_CONTAINER_ID} className={styles['sub-app-viewport']} />
    </>
  );
};

export default RenderSubApp;
