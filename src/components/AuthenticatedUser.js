import { useContext } from 'react';
import {UserContext} from '../routes/context/User';

const AuthenticatedUser = () => {
    const {user} = useContext(UserContext);
    return (
      <div>
        <div>{user.name}</div>
      </div>
    )
  }

  export default AuthenticatedUser;