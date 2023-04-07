import React from "react";
import AddModule from "../components/ModuleWithWords/AddModule";
import ModuleList from "../components/ModuleList";

const HomePage = () => {
  console.log("render");

  return (
    <>
      <AddModule />
      <ModuleList />
    </>
  );
};

export default HomePage;
