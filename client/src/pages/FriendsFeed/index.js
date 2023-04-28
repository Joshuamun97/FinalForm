import { useQuery } from '@apollo/client';
import FriendsList from '../../components/FriendsList/FriendsList';
import Share from '../../components/Share/index';
import { QUERY_THOUGHTS } from '../../utils/queries';
import FriendsPosts from '../../components/FriendsPosts';
import LogoutButton from '../../components/Logout/Logout';

const FriendsFeed = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="friends-feed-container">
        <div className="friends-posts-container">
          {loading ? (<div>Loading...</div>) 
          : (
            <FriendsPosts thoughts={thoughts} title="Friends Feed " />
          )}
          
        </div>
        <div className="friends-sidebar-container">
          <div className="friends-sidebar-content">
            <LogoutButton />
            <Share />
            <FriendsList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FriendsFeed;