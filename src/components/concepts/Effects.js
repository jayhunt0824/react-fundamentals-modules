import React, { useState, useEffect } from "react";

const Effects = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h2>Below are some important points regarding effects:</h2>
        <ul>
          <li>
            They are triggered with state and prop updates, as well as after
            initial render to the DOM.
          </li>
          <li>
            Effects are used to trigger certain actions based upon changes to
            the component.
          </li>
          <li>
            Effects can return cleanup functions, which can clean up timers
            using memory, listeners to outside API's, and other functions which
            may use system resources/
          </li>
        </ul>
        <SampleEffect />
        <br />
        <SampleEffect />
      </div>
    </div>
  );
};

const SampleEffect = () => {
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (timerRunning) {
      timer = window.setTimeout(() => {
        console.log("the timer expired", Date.now() / 1000);
        setTimerRunning(false);
      }, 2000);
    }

    return () => {
      window.clearTimeout(timer);
      console.log("the timer was cleaned up", Date.now() / 1000);
    };
  });

  let buttonHandler = () => {
    if (!timerRunning) {
      setTimerRunning(true);
    }
  };

  return (
    <div style={{ border: "1px dashed black" }}>
      <h2>This component demoes an effect</h2>
      <button>Click me to start an effect in the console</button>
    </div>
  );
};

export default Effects;
