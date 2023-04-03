import React, { FC } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./services/firebase/config";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";

import useFetchUser from "./hooks/useFetchUser";
import CardsList from "./components/ModuleWithWords/CardsList";

initializeApp(firebaseConfig);

const App: FC = () => {
  const user = useFetchUser();
  console.log(user);
  return (
    <>
      <Routes>
        <Route path="/" element={user ? <HomePage /> : <LoginPage />} />
        <Route path="/modules/:id" element={<CardsList />} />
      </Routes>
    </>
  );
};

export default App;
