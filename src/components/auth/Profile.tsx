import { useParams,  } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  return <h3>Hello from {id}</h3>;
};
export default Profile;
