import * as S from './styles';

export type SummaryStatProps = {
  stats: { value: string; description: string }[];
};

const SummaryStat = ({ stats }: SummaryStatProps) => {
  return (
    <>
      {stats.map(({ value, description }, index) => (
        <S.Stat
          key={index}
          index={index}
          value={value}
          description={description}
        />
      ))}
    </>
  );
};

export default SummaryStat;
