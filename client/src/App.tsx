import React, { FC } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./services/firebase/config";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

initializeApp(firebaseConfig);
const auth = getAuth();

const App: FC = () => {
  const [user] = useAuthState(auth);

  return (
    <Routes>
      <Route path="/" element={user ? <HomePage /> : <LoginPage />} />
    </Routes>
  );
};

export default App;
