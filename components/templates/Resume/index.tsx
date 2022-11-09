import Title from '@/components/atoms/Title';
import ResumeSection, {
  ResumeSectionProps,
} from '@/components/organisms/ResumeSection';
import * as S from './styles';

type ResumeTemplateProps = {
  title: string;
  sections: ResumeSectionProps[];
};

const ResumeTemplate = ({ title, sections }: ResumeTemplateProps) => {
  return (
    <S.Layout>
      <Title>{title}</Title>
      {sections.map(({ title: sectionTitle, items }) => (
        <ResumeSection key={sectionTitle} title={sectionTitle} items={items} />
      ))}
    </S.Layout>
  );
};

export default ResumeTemplate;
