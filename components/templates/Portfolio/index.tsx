import Title from '@/components/atoms/Title';
import ProjectCard, {
  ProjectCardProps,
} from '@/components/organisms/ProjectCard';
import * as S from './styles';

type PortfolioTemplateProps = {
  title: string;
  projects: ProjectCardProps[];
};

const PortfolioTemplate = ({ title, projects }: PortfolioTemplateProps) => {
  return (
    <S.Layout>
      <Title>{title}</Title>
      <S.Projects>
        {projects.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </S.Projects>
    </S.Layout>
  );
};

export default PortfolioTemplate;
