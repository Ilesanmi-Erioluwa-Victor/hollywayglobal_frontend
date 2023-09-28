import User from '../../auth/User';
import LoggedNav from './LoggedNav';
import PublicNav from './PublicNav';

const Navigation = () => {
  // const { storedUser } = User();

  // return <>{!storedUser ? <PublicNav /> : <LoggedNav user={storedUser} />}</>;
  return <h2>Hello from Navigation</h2>;
};

export default Navigation;
