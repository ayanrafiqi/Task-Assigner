import React from "react";
import Countdown from "react-countdown";

const CountdownTimer = ({ deadline }) => {
  return (
    <Countdown date={new Date(deadline)}>
      <div>Deadline has passed</div>
    </Countdown>
  );
};

export default CountdownTimer;
