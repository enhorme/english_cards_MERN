import { useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import api from "../services/api/api";
import { setUser } from "../store/userSlice";

const useFetchUser = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get(`/user`, {
          params: {
            id: user?.uid,
          },
        });
        dispatch(setUser({ ...res.data.user}));
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
