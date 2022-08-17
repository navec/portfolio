import withPageLayout from '@/components/HOC/WithPageLayout';
import AboutTemplate from '@/components/templates/About';
import HomeTemplate from '@/components/templates/Home';
import WorksTemplate from '@/components/templates/Works';

const Home = () => {
  const fullScreenSlider = { title: 'Gaël Batchi', description: 'portfolio' };

  return (
    <>
      <HomeTemplate />
      <AboutTemplate />
      <WorksTemplate />
    </>
  );
};

export default withPageLayout(Home, 'My page title');
