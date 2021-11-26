import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MRenderApp from '@/frameConfig/render/RenderApp';
import store from '../store';
import './index.less';

export default function render(props: any) {
  const containerHost = document.getElementById('host-app-container');
  // 主应用渲染
  ReactDOM.render(
    <Provider store={store}>
      <MRenderApp {...props} />
    </Provider>, containerHost);
}
