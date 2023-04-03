import { useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import axios from "axios";

const useFetchUser = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3500/user/`, {
          params: {
            id: user?.uid,
          },
        });
        console.log(res.data);
        dispatch(setUser({ ...res.data.user, modules: res.data.modules }));
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      fetchUser();
    }
  }, [dispatch, user]);

  return user;
};

export default useFetchUser;
