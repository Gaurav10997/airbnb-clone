import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import Footer from './Footer';
import Icons from '@/pages/Icons';

const Layout = () => {
  return (
    <>
      <Header />
      <Icons/>
      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
