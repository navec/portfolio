import * as S from './styles';

type TitleTabsProps = {
  titles: string[];
};

const TabTitles = ({ titles }: TitleTabsProps) => (
  <S.Titles>
    {titles.map((label) => (
      <S.Title key={label}>{label}</S.Title>
    ))}
  </S.Titles>
);

export default TabTitles;
