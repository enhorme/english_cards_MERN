import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import UsersList from "../components/UsersList";

const MainLayout = ({ user }) => {
  return (
    <>
      <header>
        <Header user={user} />
      </header>
      <main>
        <aside id="left" className="column">
          <UsersList />
        </aside>
        <div id="right">
          <div className="main__content">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
