import WithPageLayout from '@/components/HOC/WithPageLayout';
import { LinkType } from '@/components/molecules/Link';
import ContactTemplate from '@/components/templates/Contact';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';
import { SiLinkedin } from 'react-icons/si';

const { title, subtitle, description, socials, endWord } = {
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
};
const Contact = () => {
  return (
    <ContactTemplate
      title={title}
      subtitle={subtitle}
      description={description}
      socials={socials}
      endWord={endWord}
    />
  );
};

export default WithPageLayout(Contact, 'Contact');
