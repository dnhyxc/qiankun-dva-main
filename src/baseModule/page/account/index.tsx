import React from 'react';
import styles from './index.less';

const AccountPage: React.FC = (props) => {
  console.log(props, 'props');
  return <div className={styles.container}>Account</div>;
};

export default AccountPage;
