import { TimeUnit } from "@/components/types/TimeUnit.enum";
import * as S from "./styles";

type TimerProps = {
  value: number;
  timeUnit: TimeUnit;
};

const Timer = ({ value, timeUnit }: TimerProps) => {
  const formatedValue = value.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return (
    <S.Wrapper>
      <S.Value>{formatedValue}</S.Value>
      <S.Unit>{timeUnit}</S.Unit>
    </S.Wrapper>
  );
};

export default Timer;
