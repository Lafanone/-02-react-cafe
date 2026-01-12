import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from '../cafeInfo/CafeInfo';
import VoteOptions from '../voteOptions/VoteOptions';
import { Votes, VoteType } from '../types/votes';

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
  
  const totalFeedback = votes.good + votes.neutral + votes.bad;

  return (
    <div className={css.app}>
      <CafeInfo /> 
      <VoteOptions 
        onVote={handleVote} 
        onReset={resetVotes} 
        canReset={totalFeedback > 0} 
      />
    </div>
  );
};

export default App;