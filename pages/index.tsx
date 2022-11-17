import WithPageLayout from '@/components/HOC/WithPageLayout';
import Home from '@/components/templates/Home';
import { API_URL } from '@/pages/api/constant';

type IndexProps = {
  subtitle: string;
  title: string;
  tag: string;
  description: string;
  poster: string;
};

const Index = ({ title, subtitle, tag, description, poster }: IndexProps) => (
  <Home
    title={title}
    subTitle={subtitle}
    tag={tag}
    text={description}
    poster={poster}
    action={{ name: 'More about me', link: '/about-me' }}
  />
);

export async function getStaticProps() {
  const data = await fetch(`${API_URL}/api/home`).then((res) => res.json());
  return { props: { ...data } };
}

export default WithPageLayout(Index, 'Gael portfolio');
