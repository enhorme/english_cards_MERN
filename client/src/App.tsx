import React, { FC } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./services/firebase/config";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Card from "./components/ModuleWithWords";

initializeApp(firebaseConfig);
const auth = getAuth();

const App: FC = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <Routes>
        <Route path="/" element={user ? <HomePage /> : <LoginPage />} />
      </Routes>
      <Card backText="second word" frontText="first word" />
    </>
  );
};

export default App;
