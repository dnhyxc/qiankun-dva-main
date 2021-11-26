import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

const routes = [
  {
    name: 'React',
    path: '/dnhyxc/react',
    key: 'react',
  },
  {
    name: 'Vue',
    path: '/dnhyxc/vue',
    key: 'vue',
  },
];

const updateLink = (to: string) => {
  history.pushState(null, to, to);
};

const MenuBar: React.FC = () => {
  const changePage = (path: string) => {
    updateLink(path);
  };

  return (
    <div className={styles.menuWrap}>
      <div className={styles.title}>QIANKUN</div>
      {routes.map((i) => (
        <a
          className={classNames(
            styles.route,
            location.pathname.includes(i.path) && styles.active,
          )}
          key={i.key}
          onClick={() => changePage(i.path)}
        >
          {i.name}
        </a>
      ))}
    </div>
  );
};

export default MenuBar;
