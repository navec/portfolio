import { IconType } from 'react-icons';

import * as S from './styles';

export type SummaryJobProps = {
  title: string;
  items: { icon: IconType; title: string; description?: string }[];
};

const SummaryJob = ({ title, items }: SummaryJobProps) => {
  return (
    <>
      <S.JobTitle as="h3">{title}</S.JobTitle>
      <S.Jobs key={title} columns={{ base: 1, md: 3 }} spacing={10}>
        {items.map(({ icon, title, description }, index) => (
          <S.Job key={index}>
            <S.JobIcon as={icon} />
            <S.Information>
              <S.Title as="h4">{title}</S.Title>
              <S.Description>{description}</S.Description>
            </S.Information>
          </S.Job>
        ))}
      </S.Jobs>
    </>
  );
};

export default SummaryJob;
