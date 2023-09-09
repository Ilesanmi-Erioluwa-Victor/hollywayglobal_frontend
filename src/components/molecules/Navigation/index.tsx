import User from '../../auth/User';
import LoggedNav from './LoggedNav';
import PublicNav from './PublicNav';

const Navigation = () => {
  const storedUser = User();

  return <>{!storedUser ? <PublicNav /> : <LoggedNav user={storedUser} />}</>;
};

export default Navigation;
