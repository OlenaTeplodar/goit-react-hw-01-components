import Profile from './components/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import user from './data/user.json';
import statistic from './data/statistics.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" statistic={statistic} />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
