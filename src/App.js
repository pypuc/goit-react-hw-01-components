import React from "react";
import Profile from "./Profile";
import user from "./user.json";
import Statistics from "./Statistics";
import data from "./data.json";
import FriendList from "./FriendList.jsx";
import friends from "./friends.json";
import transactions from "./transactions.json";
import TransactionHistory from "./TransactionHistory";

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
