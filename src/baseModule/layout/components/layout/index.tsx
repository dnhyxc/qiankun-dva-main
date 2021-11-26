import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import RenderSubApp from '@/frameCore/render/RenderSubApp';
import MenuBar from '../MenuBar';

import styles from './index.less';

const { Sider } = Layout;

interface ILayoutProps {
  children: ReactNode;
  loading: boolean;
  power: any;
  type?: string;
  content?: any;
  needHeader?: boolean;
}

const MainLayout: React.FC<ILayoutProps> = ({
  children,
  loading,
  type,
  content,
  needHeader = true,
  power,
}) => {
  return (
    <Layout className={styles.layout}>
      {needHeader && (
        <Sider width={88} theme="light" className={styles.sider}>
          <MenuBar />
        </Sider>
      )}
      <Layout.Content id="main-content" className={styles.content}>
        {children}
        <main id="sub-app-container">
          <RenderSubApp loading={loading} type={type} content={content} />
        </main>
      </Layout.Content>
    </Layout>
  );
};

export default MainLayout;
