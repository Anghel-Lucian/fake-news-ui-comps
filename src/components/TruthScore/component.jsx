import React from "react";
import { useSelector } from "react-redux";

import { selectTweetVerdict } from "../../appSlice";

const TruthScore = () => {
  const { score } = useSelector(selectTweetVerdict);

  return (
    <div className="truth-score">
      <div className="truth-score__points">{score}</div>
    </div>
  );
};

export default TruthScore;
