import WithPageLayout from '@/components/HOC/WithPageLayout';
import PortfolioTemplate from '@/components/templates/Portfolio';

const item = {
  name: 'Project 1',
  title: 'Portfolio',
  poster: 'https://wallpaperaccess.com/full/348158.png',
  description: 'My fake description',
  tags: ['react', 'front'],
  preview: '#',
  source: '#',
};

const project = {
  items: [
    { ...item, title: 'Project 1' },
    { ...item, title: 'Project 2' },
    { ...item, title: 'Project 3' },
  ],
};

const { title, projects } = {
  title: 'Portfolio',
  projects: [
    { ...item, title: 'Project 1' },
    { ...item, title: 'Project 2' },
    { ...item, title: 'Project 3' },
    {
      ...item,
      title: 'Project 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic rerum asperiores molestiae reiciendis quo consequatur et, harumsuscipit iure debitis aperiam! Sit nam nisi laudantium aspernatur dignissimos omnis ex at.',
    },
    { ...item, title: 'Project 5' },
  ],
};
const Portfolio = () => {
  return <PortfolioTemplate title={title} projects={projects} />;
};

export default WithPageLayout(Portfolio, 'Portfolio');
