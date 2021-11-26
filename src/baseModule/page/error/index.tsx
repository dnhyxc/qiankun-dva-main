import React from 'react';
import styles from './index.less';

interface IProps {
  content: string;
  loading: boolean;
  type: string;
}

const ErrorPage: React.FC<IProps> = (props) => {
  return <div className={styles.container}>{props.content}</div>;
};

export default ErrorPage;
