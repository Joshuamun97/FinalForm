import { useQuery } from '@apollo/client';
import FriendsList from '../../components/FriendsList/FriendsList';
import Share from '../../components/Share/index';
import { QUERY_THOUGHTS } from '../../utils/queries';
import FriendsPosts from '../../components/FriendsPosts';
import './index.scss'
import Auth from '../../utils/auth'
import Login from '../Login/Login';
const FriendsFeed = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  const isLoggedIn = Auth.loggedIn();

  if (!isLoggedIn) {
    return <Login/>;
  }

  return (
    <main>
  <div className=" homeFeedContainer d-flex flex-row flex-wrap align-items-center">
    
    <div className="leftContainer">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <FriendsPosts thoughts={thoughts} title="Friends Feed " />
      )}
    </div>
    <div className="rightContainer ">
      <Share />
      <FriendsList />


    </div>
  </div>
</main>

  );
};

export default FriendsFeed;