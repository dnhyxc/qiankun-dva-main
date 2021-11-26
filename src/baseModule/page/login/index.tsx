import { Button } from 'antd';
import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'dva/router';
import styles from './index.less';

interface IProps extends RouteComponentProps {
  history: any;
  loading: boolean;
  type: string;
  needHeader: boolean;
}
interface ISelfProps {
  name: string;
}

class Login extends PureComponent<IProps, ISelfProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: 'Login...',
    };
  }

  onLogin = () => {
    console.log('点击登录');
    // window.location.hostname = "/";
    window.location.href = '/dnhyxc/react';
  };

  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.name}>{this.state.name}</div>
        <div>
          <Button type="primary" onClick={this.onLogin}>
            点击登录
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
