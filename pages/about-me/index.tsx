import WithPageLayout from '@/components/HOC/WithPageLayout';
import { SummaryJobProps } from '@/components/organisms/SummaryJob';
import { SummaryStatProps } from '@/components/organisms/SummaryStat';
import AboutMeTemplate from '@/components/templates/AboutMe';
import { API_URL } from '@/pages/api/constant';

type AboutMeProps = {
  title: string;
  subtitle: string;
  description: string;
  summary: SummaryStatProps & { job: SummaryJobProps };
};

const AboutMe = ({ title, subtitle, description, summary }: AboutMeProps) => {
  return (
    <AboutMeTemplate
      title={title}
      subtitle={subtitle}
      description={description}
      summary={summary}
    />
  );
};

export async function getStaticProps() {
  const data = await fetch(`${API_URL}/api/about-me`).then((res) => res.json());
  return { props: { ...data } };
}

export default WithPageLayout(AboutMe, 'About me');
