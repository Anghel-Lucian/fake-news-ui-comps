import React from "react";
import { useSelector } from "react-redux";

import { selectTweetVerdict } from "../../appSlice";

const TruthScore = () => {
  const { score, reason } = useSelector(selectTweetVerdict);

  return (
    <div className="truth-score">
      <div className="truth-score__points">{score}</div>
      <div className="truth-score__reason">{reason}</div>
    </div>
  );
};

export default TruthScore;
