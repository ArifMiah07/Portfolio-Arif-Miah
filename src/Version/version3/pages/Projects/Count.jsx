import { useEffect, useState } from "react";



const CountdownDisplay = () => {
    const n = Math.floor(Math.random() * 100000000000000);

    const [count, setCount] = useState(n); // Initialize the countdown value
    const [isCounting, setIsCounting] = useState(true); // Flag to control the countdown
  
    useEffect(() => {
      if (count > 0 && isCounting) {
        const timer = setTimeout(() => {
          setCount(count - 1); // Decrement the count by 1 every second
        }, 1000);
  
        // Cleanup the timer to avoid memory leaks
        return () => clearTimeout(timer);
      } else if (count === 0) {
        setIsCounting(false); // Stop the countdown when it reaches 0
      }
    }, [count, isCounting]); 

    // console.log(count);

  return (
    <div className="countdown-display">
        <h1>{count > 0 ? `${count}` : "finished!"}</h1>
    </div>
  );
};

export default CountdownDisplay;
