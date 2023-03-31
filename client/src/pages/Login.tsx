import React, { FC, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export interface ILoginPageProps {}

const LoginPage: FC<ILoginPageProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then(({ user }) => {
        try {
          axios.post("http://localhost:3500/user", {
            email: user.email,
            id: user.uid,
            name: user.displayName,
            photoUrl: user.photoURL,
          });
        } catch (e) {
          console.log(e);
        }
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };
  return (
    <div>
      {/*<p>Login Page</p>*/}
      <button onClick={() => signInWithGoogle()} disabled={authing}>
        Sign in with Google
      </button>
      <div className="avatar">e2e</div>
    </div>
  );
};

export default LoginPage;
