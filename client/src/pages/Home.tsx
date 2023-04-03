import React, { FC } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/userSlice";
import Input from "../components/ModuleWithWords/Input";
import ModuleList from "../components/ModuleList";

export interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = (props) => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => dispatch(logoutUser()));
  };
  return (
    <div>
      Home Page
      <button onClick={handleSignOut}>Logout</button>
      <Input />
      <ModuleList />
    </div>
  );
};

export default HomePage;
