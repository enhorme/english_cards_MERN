import React, { FC, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

interface ILoginPageProps {}

const LoginPage: FC<ILoginPageProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState<boolean>(false);
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then(async ({ user }) => {
        try {
          const res = await axios.post<{
            email: string;
            id: string;
            name: string;
            photoUrl: string;
          }>("http://localhost:3500/user", {
            email: user.email!,
            id: user.uid!,
            name: user.displayName!,
            photoUrl: user.photoURL!,
          });
          console.log(res);
          dispatch(
            setUser({
              id: res.data.id,
              email: res.data.email,
              name: res.data.name,
              photoUrl: res.data.photoUrl,
            })
          );
          navigate("/");
        } catch (e) {
          console.log(e);
        }
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
