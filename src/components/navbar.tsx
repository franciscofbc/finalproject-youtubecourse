import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link className="lLinks" to="/">
          Home{' '}
        </Link>
        {!user ? (
          <Link className="lLinks" to="/login">
            Login{' '}
          </Link>
        ) : (
          <Link className="lLinks" to="/createpost">
            Create post{' '}
          </Link>
        )}
      </div>

      <div className="user">
        {user && (
          <>
            <p className="userItem">{user?.displayName}</p>
            <img
              className="userItem"
              src={user?.photoURL || ''}
              width="20"
              height="20"
            />
            <button className="userItem" onClick={signUserOut}>
              Log out
            </button>
          </>
        )}
      </div>
    </div>
  );
};
