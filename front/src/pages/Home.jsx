import React from "react";
import { useSelector } from "react-redux";
import AddModule from "../components/ModuleWithWords/AddModule";
import ModuleList from "../components/ModuleList";
import { selectModulesByFilter } from "../store/selectors";

const HomePage = () => {
  const modules = useSelector(selectModulesByFilter);

  return (
    <>
      <AddModule />
      <ModuleList modules={modules} />
    </>
  );
};

export default HomePage;
