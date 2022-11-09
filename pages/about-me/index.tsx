import WithPageLayout from '@/components/HOC/WithPageLayout';
import AboutMeTemplate from '@/components/templates/AboutMe';
import { SiJamstack, SiNodedotjs, SiReact } from 'react-icons/si';

const { title, subtitle, description, summary } = {
  title: 'ABOUT ME',
  subtitle: "I'm Gael Batchi, Fullstack developper.",
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatibus officiis quis, laboriosam aliquid ea praesentium incidunt repudiandae quae quasi veritatis eius labore fuga tempore blanditiis a eos. Error, earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatibus officiis quis, laboriosam aliquid ea praesentium incidunt repudiandae quae quasi veritatis eius labore fuga tempore blanditiis a eos. Error, earum!',
  summary: {
    stats: [
      { value: '7+', description: 'YEARS EXPERIENCES' },
      { value: '5+', description: 'PROJECTS DONE' },
      { value: '4', description: 'HAPPY CLIENTS' },
      { value: '0', description: 'FOLLOWERS' },
    ],
    job: {
      title: 'What I do ?',
      items: [
        {
          icon: SiReact,
          title: 'React',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque tenetur ',
        },
        {
          icon: SiNodedotjs,
          title: 'Node JS',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque tenetur ',
        },
        {
          icon: SiJamstack,
          title: 'JamStack',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque tenetur ',
        },
      ],
    },
  },
};

const AboutMe = () => {
  return (
    <AboutMeTemplate
      title={title}
      subtitle={subtitle}
      description={description}
      summary={summary}
    />
  );
};

export default WithPageLayout(AboutMe, 'About me');
