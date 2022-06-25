import Countdown from "@/components/molecules/Countdown";
import * as S from "./styles";

type ComingSoonProps = {
  title?: string;
  description?: string;
  countdown: number;
};

const ComingSoon = ({
  title = "Coming soon",
  description = "Lorem Ipsum is simply dummy text of the printing.",
  countdown,
}: ComingSoonProps) => (
  <S.ComingSoonWrapper>
    <S.Author>Gaël B.</S.Author>
    {!!countdown && (
      <S.WrappedCountdown>
        <Countdown seconds={countdown} />
      </S.WrappedCountdown>
    )}
    <S.Tag>
      <span>#</span>
      <span>inprogress</span>
    </S.Tag>
    <S.Title as="h1" size="4xl" noOfLines={1}>
      {title}
    </S.Title>
    {description && <S.Description noOfLines={1}>{description}</S.Description>}
  </S.ComingSoonWrapper>
);

export default ComingSoon;
