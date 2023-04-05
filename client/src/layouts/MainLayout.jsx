import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = ({ user }) => {
  return (
    <>
      <Header user={user} />
      <Outlet />
    </>
  );
};

export default MainLayout;
