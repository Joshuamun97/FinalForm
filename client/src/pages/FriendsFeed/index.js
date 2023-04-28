import { useQuery } from '@apollo/client';

import Share from '../../components/Share/index'

import { QUERY_THOUGHTS } from '../../utils/queries';
import FriendsPosts from '../../components/FriendsPosts';

const FriendsFeed = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
   

    <main>
  <div className="d-flex flex-row align-items-start" style={{ height: "100vh" }}>
    
    <div
      className="col-12 col-md-8 mb-3"
      style={{ overflowY: "auto" }}
    >
      {loading ? (
        <div>Loading...</div>
      ) : (
        <FriendsPosts thoughts={thoughts} title="Friends Feed " />
      )}
    </div>
    <div
      className="col-12 col-md-4 mb-3 p-3"
      style={{ border: "1px dotted #1a1a1a", height: "fit-content" }}
    >
      <Share />
    </div>
  </div>
</main>

  );
};

export default FriendsFeed;


