import React from 'react';

import { Outlet } from 'react-router';
import LeftSide from './../../Page/LeftSide/LeftSide';
const Layout = () => {
  return (
    <>
      <LeftSide />
      <Outlet />
    </>
  );
};

export default Layout;
