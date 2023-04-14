import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../store/allUsersSlice";
import {selectAllUsers, selectUser} from "../store/selectors";



const UserList = () => {
  const {id} = useSelector(selectUser)
  const { data, status, error } = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if(id) {
      dispatch(fetchUsers(id));
    }
  }, [id]);

  if (status === "loading") {
    return <div>Loading users...</div>;
  } else if (status === "failed") {
    return <div>Error: {error}</div>;
  } else {
    return (
      <ul className="users-list">
       <h5>ALL USERS:</h5>
        {data?.map((user) => (
          <Link to={`users/${user._id}`} state={user.modules} key={user._id}>
            <li  className="users-list__item">
              <div
                className="avatar"
              >
                <img src={user.photoUrl} alt="" referrerPolicy="no-referrer"/>
              </div>{" "}
              <div>
                {user.name}
                <div>
                  <small>Modules: {user.moduleCount}</small>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    );
  }
};

export default UserList;
