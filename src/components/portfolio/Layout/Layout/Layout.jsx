import React from 'react'
import './Layout.scss'
import { Outlet } from "react-router-dom";
import Header from '../../../../components/portfolio/Layout/Header/Header';


function Layout() {
    return (
        <>
          <Header />
          <main className="body">
            <Outlet />
          </main>
        </>
      );
}

export default Layout