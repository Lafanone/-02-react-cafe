import { useState } from 'react';
import css from './app.module.css';
import CafeInfo from '../CafeInfo_TEMP/CafeInfo';
import VoteOptions from '../VoteOptions_TEMP/VoteOptions';
import VoteStats from '../VoteStats_TEMP/VoteStats';
import Notification from '../Notification_TEMP/Notification';
import type { Votes, VoteType } from '../../types/votes';

const App = () => {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1
    }));
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };
  
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;

  return (
    <div className={css.app}>
      <CafeInfo /> 
      
      <VoteOptions 
        onVote={handleVote} 
        onReset={resetVotes} 
        canReset={totalVotes > 0} 
      />
      {totalVotes > 0 ? (
        <VoteStats 
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
          <Notification />
      )}
    </div>
  );
};

export default App;