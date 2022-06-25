import Timer from "@/components/atoms/Timer";
import {
  DAY,
  HOUR,
  MINUTE,
  SECOND,
} from "@/components/types/SecondByTime.constant";
import { TimeUnit } from "@/components/types/TimeUnit.enum";
import { useEffect, useState } from "react";

type CountdownProps = { seconds: number };

const Countdown = ({ seconds }: CountdownProps) => {
  const [timer, setTimer] = useState<number>(seconds);

  const days = Math.floor(timer / DAY);
  const daysToSeconds = days * DAY;

  const hours = Math.floor((timer - daysToSeconds) / HOUR);
  const hoursToSeconds = daysToSeconds + hours * HOUR;

  const minutes = Math.floor((timer - hoursToSeconds) / MINUTE);
  const minToSeconds = hoursToSeconds + minutes * MINUTE;

  const secondsRemaining = Math.floor((timer - minToSeconds) / SECOND);

  useEffect(() => {
    const interval = setInterval(() => setTimer((i) => i - 1), 1000);
    () => clearInterval(interval);
  }, []);

  return (
    <>
      <Timer value={days} timeUnit={TimeUnit.DAYS} />
      <Timer value={hours} timeUnit={TimeUnit.HOURS} />
      <Timer value={minutes} timeUnit={TimeUnit.MINUTES} />
      <Timer value={secondsRemaining} timeUnit={TimeUnit.SECONDS} />
    </>
  );
};

export default Countdown;
