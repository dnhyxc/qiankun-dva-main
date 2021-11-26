import React from 'react';
import { Spin } from 'antd';
import styles from './index.less';

const LoadingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Spin />
    </div>
  );
};

export default LoadingPage;
