import { useQuery } from '@apollo/client';
import FriendsList from '../../components/FriendsList/FriendsList';
import Share from '../../components/Share/index';
import { QUERY_THOUGHTS } from '../../utils/queries';
import FriendsPosts from '../../components/FriendsPosts';
import './index.scss'
const FriendsFeed = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

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
    </div>
  </div>
</main>

  );
};

export default FriendsFeed;