import React, { PureComponent } from 'react';
import styles from './index.less';

interface IPropsState {
  content: string;
  loading: boolean;
  type: string;
}
interface ISelfState {
  pageName: string;
}

class NotFound extends PureComponent<IPropsState, ISelfState> {
  constructor(props: IPropsState) {
    super(props);
    this.state = {
      pageName: '',
    };
  }

  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.name}>{this.props.content}{this.state.pageName}</div>
      </div>
    );
  }
}

export default NotFound;
