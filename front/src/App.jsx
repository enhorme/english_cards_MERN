import React from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./services/firebase/config";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/Home";

import useFetchUser from "./hooks/useFetchUser";
import CardsList from "./components/ModuleWithWords/CardsList";
import MainLayout from "./layouts/MainLayout";
import SelectedUserModuleList from "./components/SelectedUserModuleList";

initializeApp(firebaseConfig);

const App = () => {
  const user = useFetchUser();

  // useEffect(() => {
  //   api.get("user/all").then((res) => console.log(res));
  // }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout user={user} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/modules/:id" element={<CardsList />} />
          <Route path="/users/:id" element={<SelectedUserModuleList />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
