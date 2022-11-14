import WithPageLayout from '@/components/HOC/WithPageLayout';
import { ProjectCardProps } from '@/components/organisms/ProjectCard';
import PortfolioTemplate from '@/components/templates/Portfolio';
import { API_URL } from '@/pages/api/constant';

type PortfolioProps = {
  title: string;
  projects: ProjectCardProps[];
};

const Portfolio = ({ title, projects }: PortfolioProps) => {
  return <PortfolioTemplate title={title} projects={projects} />;
};

export async function getStaticProps() {
  const data = await fetch(`${API_URL}/api/portfolio`).then((res) =>
    res.json()
  );
  return { props: { ...data } };
}

export default WithPageLayout(Portfolio, 'Portfolio');
