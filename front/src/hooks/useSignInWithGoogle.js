import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useSignInWithGoogle = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(async ({ user }) => {
        try {
          const res = await axios.post("http://localhost:3500/user", {
            email: user.email,
            id: user.uid,
            name: user.displayName,
            photoUrl: user.photoURL,
          });
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
      });
  };

  return { signInWithGoogle };
};

export default useSignInWithGoogle;
