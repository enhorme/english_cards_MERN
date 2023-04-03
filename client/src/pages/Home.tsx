import React, { FC } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/userSlice";
import Input from "../components/ModuleWithWords/Input";

export interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = (props) => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => dispatch(logoutUser()));
  };
  return (
    <div>
      HomePAge
      <button onClick={handleSignOut}>Logout</button>
      <Input />
    </div>
  );
};

export default HomePage;
