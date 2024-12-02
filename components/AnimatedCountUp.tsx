"use client";
import CountUp from "react-countup";

const AnimatedCountUp = ({ amount }: { amount: number }) => {
  return (
    <span  >
      <CountUp 
        end={amount} 
        prefix="$"
        duration={2.75}
        decimal=","
      />
    </span>
  );
};

export default AnimatedCountUp;
