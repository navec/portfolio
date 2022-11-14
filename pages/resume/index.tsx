import WithPageLayout from '@/components/HOC/WithPageLayout';
import { ResumeSectionProps } from '@/components/organisms/ResumeSection';
import ResumeTemplate from '@/components/templates/Resume';
import { API_URL } from '@/pages/api/constant';

type ResumeTemplateProps = {
  title: string;
  sections: ResumeSectionProps[];
};

const Resume = ({ title, sections }: ResumeTemplateProps) => {
  return <ResumeTemplate title={title} sections={sections} />;
};

export async function getStaticProps() {
  const data = await fetch(`${API_URL}/api/resume`).then((res) => res.json());
  return { props: { ...data } };
}

export default WithPageLayout(Resume, 'Resume');
