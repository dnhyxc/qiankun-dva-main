import React from 'react';
import ErrorPage from './error';
import AccountPage from './account';
import LoginPage from './login';
import TestPage from './test';
import LoadingPage from './loading';
import NotFound from './notfound';

/**
 * 渲染子应用相关
 * @param {*} props
 */
const renderPage = (props: any) => {
  const { loading, type } = props;
  return (
    <>
      {loading && <LoadingPage {...props} />}
      {!loading && type === 'account' && <AccountPage {...props} />}
      {!loading && type === 'error' && <ErrorPage {...props} />}
      {!loading && type === 'login' && <LoginPage {...props} />}
      {!loading && type === 'test' && <TestPage {...props} />}
      {!loading && type === 'notfound' && <NotFound {...props} />}
    </>
  );
};

export default renderPage;
