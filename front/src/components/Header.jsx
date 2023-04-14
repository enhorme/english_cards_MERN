import { getAuth, signOut } from "firebase/auth";
import useSignInWithGoogle from "../hooks/useSignInWithGoogle";
import { FiHome, FiLogIn, FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../store/userSlice";

const Header = ({ user }) => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const { signInWithGoogle } = useSignInWithGoogle();

  const handleSignOut = () => {
    signOut(auth).then(() => dispatch(logoutUser()));
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/" className="header__nav-link">
              Home <FiHome />
            </Link>
          </li>
          <li className="header__nav-item">
            {/*<Link to="/modules" className="nav__link header__nav-link">*/}
            {/*  Modules <FiBookOpen />*/}
            {/*</Link>*/}
          </li>
          {user ? (
            <>
              <li className="header__nav-link" onClick={handleSignOut}>
                Sign Out <FiLogOut />
              </li>
              <li className="header__nav-item">
                <div className="header__nav-user-info">
                  <div className="header__nav-user-name">
                    {user.displayName}
                  </div>
                  <div
                    className="avatar"
                  >
                    <img src={user.photoURL} alt="" referrerPolicy="no-referrer"/>
                  </div>
                </div>
              </li>
            </>
          ) : (
            <li className="header__nav-item" onClick={signInWithGoogle}>
              Sign In <FiLogIn />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
