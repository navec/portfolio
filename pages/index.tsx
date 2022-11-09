import WithPageLayout from '@/components/HOC/WithPageLayout';
import Home from '@/components/templates/Home';

const { title, subtitle, tag, aboutMe, poster } = {
  title: "I'm Gaël",
  subtitle: 'Hi there',
  tag: 'Fullstack developper',
  aboutMe:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic rerum asperiores molestiae reiciendis quo consequatur et, harumsuscipit iure debitis aperiam! Sit nam nisi laudantium aspernatur dignissimos omnis ex at.',
  poster: 'https://wallpaperaccess.com/full/348158.png',
};

const Index = () => (
  <Home
    title={title}
    subTitle={subtitle}
    tag={tag}
    text={aboutMe}
    poster={poster}
  />
);

export default WithPageLayout(Index, 'Gael portfolio');
