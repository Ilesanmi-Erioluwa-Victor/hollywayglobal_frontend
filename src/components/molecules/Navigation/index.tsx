import userData from '../../auth/User';
import LoggedNav from './LoggedNav';
import PublicNav from './PublicNav';

const Navigation = () => {
  const { userInfo }: any = userData();
  return <>{!userInfo?.data ? <PublicNav /> : <LoggedNav {...userInfo} />}</>;
};

export default Navigation;
