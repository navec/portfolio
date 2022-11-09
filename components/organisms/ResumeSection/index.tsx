import ResumeSectionItem, {
  ResumeSectionItemProps,
} from '@/components/molecules/ResumeSectionItem';
import { BoxProps } from '@chakra-ui/react';

import * as S from './styles';

export type ResumeSectionProps = BoxProps & {
  title: string;
  items: ResumeSectionItemProps[];
};

const ResumeSection = ({ title, items, ...boxProps }: ResumeSectionProps) => {
  return (
    <S.Layout {...boxProps}>
      <S.SectionTitle>{title}</S.SectionTitle>
      <S.SectionContent>
        {items.map(({ title: itemTitle, tag, description }, key) => (
          <ResumeSectionItem
            key={key}
            title={itemTitle}
            tag={tag}
            description={description}
          />
        ))}
      </S.SectionContent>
    </S.Layout>
  );
};

export default ResumeSection;
