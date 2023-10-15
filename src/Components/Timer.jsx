import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context";

const Timer = () => {
  const {
    timerDays,
    setTimerDays,
    timerHours,
    setTimerHours,
    timerMinutes,
    setTimerMinutes,
    timerSeconds,
    setTimerSeconds,
  } = useContext(GlobalContext);

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("November 10,2024").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (100 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div className="mt-7 md:mt-10" id="timer-container">
      <h1 className="font-extrabold text-center pb-4 text-xl md:text-3xl">
        Date: 10th, November 2024.
      </h1>
      <div id="timer">
        <div
          id="clock"
          className="relative m-auto flex justify-center items-center bg-purple-600 h-24 w-72 text-purple-200 font-extrabold rounded-xl"
        >
          <section className="p-2 flex flex-col justify-center items-center">
            <p className="text-3xl">{timerDays}</p>
            <small>Days</small>
          </section>
          <span>:</span>
          <section className="p-2 flex flex-col justify-center items-center">
            <p className="text-3xl">{timerHours}</p>
            <small>Hours</small>
          </section>
          <span>:</span>
          <section className="p-2 flex flex-col justify-center items-center">
            <p className="text-3xl">{timerMinutes}</p>
            <small>Minutes</small>
          </section>
          <span>:</span>
          <section className="p-2 flex flex-col justify-center items-center">
            <p className="text-3xl">{timerSeconds}</p>
            <small>Seconds</small>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Timer;
