import React, { FC } from "react";
import { getAuth, signOut } from "firebase/auth";

export interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = (props) => {
  const auth = getAuth();
  const handleSignOut = () => signOut(auth);
  return (
    <div>
      HomePAge
      <button onClick={handleSignOut}>Logout</button>
    </div>
  );
};

export default HomePage;
