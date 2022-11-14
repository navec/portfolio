import { LinkType } from '@/components/molecules/Link';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';
import { SiJamstack, SiLinkedin, SiNodedotjs, SiReact } from 'react-icons/si';

const item = {
  title: 'Title',
  tag: 'Tag',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas alias dicta quod repellat voluptates dolores tempora quam nisi, totam, deleniti illo soluta facere ratione fugiat vel blanditiis, voluptatum sint. Officiis!',
};

const portfolioItem = {
  name: 'Project 1',
  title: 'Portfolio',
  poster: 'https://wallpaperaccess.com/full/348158.png',
  description: 'My fake description',
  tags: ['react', 'front'],
  preview: '#',
  source: '#',
};

const data: Record<string, any> = {
  home: {
    title: "I'm Gaël",
    subtitle: 'Hi there',
    tag: 'Fullstack developper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic rerum asperiores molestiae reiciendis quo consequatur et, harumsuscipit iure debitis aperiam! Sit nam nisi laudantium aspernatur dignissimos omnis ex at.',
    poster: 'https://wallpaperaccess.com/full/348158.png',
  },
  'about-me': {
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
  },
  resume: {
    title: 'Resume',
    sections: [
      {
        title: 'Education',
        items: [item, item, item, { ...item, description: 'toto' }],
      },
      {
        title: 'Experience',
        items: [item, item, item],
      },
    ],
  },
  contact: {
    title: 'Contact',
    subtitle: 'Feel free to contact me!',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, temporibus distinctio facere vel eligendi ut nesciunt ex corporis, iure nemo mollitia est suscipit, dolorem illum a. Vel magni reiciendis laborum!',
    socials: [
      {
        icon: HiPhone,
        title: 'Call Us',
        content: {
          type: 'tel' as LinkType,
          value: '+33 X XX XX XX XX',
          alias: undefined,
        },
      },
      {
        icon: HiOutlineMail,
        title: 'Email address',
        content: {
          type: 'mailto' as LinkType,
          value: 'navecbatchi@gmailcom',
          alias: undefined,
        },
      },
      {
        icon: SiLinkedin,
        title: 'Linkedin',
        content: {
          type: 'text' as LinkType,
          value: 'https://fr.linkedin.com/in/gael-batchi-94714a84',
          alias: 'Gael Batchi',
        },
      },
    ],
    endWord: 'THANKS FOR PATIENCE !',
  },
  portfolio: {
    title: 'Portfolio',
    projects: [
      { ...portfolioItem, title: 'Project 1' },
      { ...portfolioItem, title: 'Project 2' },
      { ...portfolioItem, title: 'Project 3' },
      {
        ...portfolioItem,
        title: 'Project 4',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic rerum asperiores molestiae reiciendis quo consequatur et, harumsuscipit iure debitis aperiam! Sit nam nisi laudantium aspernatur dignissimos omnis ex at.',
      },
      { ...portfolioItem, title: 'Project 5' },
    ],
  },
};

export default data;
