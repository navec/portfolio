import { useLocation } from '@/components/hooks/useLocation';
import DestopNav from '@/components/templates/Menu/DestopNav';
import MobileNav from '@/components/templates/Menu/MobileNav';
import Sidebar from '@/components/templates/Menu/Sidebar';
import { IconType } from 'react-icons';
import { AiFillGithub, AiFillHome, AiFillLinkedin } from 'react-icons/ai';
import { HiPresentationChartLine, HiUser } from 'react-icons/hi';
import { MdWork } from 'react-icons/md';
import { RiMessage2Fill } from 'react-icons/ri';

export type MenuItemProps = {
  name: string;
  icon: IconType;
  id: string;
  href: string;
};

const defaultData = [
  { name: 'Home', icon: AiFillHome, id: 'home', href: '/' },
  { name: 'About me', icon: HiUser, id: 'about-me', href: '/about-me' },
  { name: 'Resume', icon: MdWork, id: 'resume', href: '/resume' },
  {
    name: 'Portfolio',
    icon: HiPresentationChartLine,
    id: 'portfolio',
    href: '/portfolio',
  },
  { name: 'Contact', icon: RiMessage2Fill, id: 'contact', href: '/contact' },
];

const socials = [
  {
    name: 'Github',
    icon: AiFillGithub,
    id: 'github',
    href: 'https://github.com/navec',
  },
  {
    name: 'Linkedin',
    icon: AiFillLinkedin,
    id: 'linkedin',
    href: 'https://fr.linkedin.com/in/gael-batchi-94714a84',
  },
];

const Menu = () => {
  const { pageName } = useLocation();
  const isHome = pageName === 'home';

  const items = defaultData.map((item) => ({
    ...item,
    isSelected: item.id === pageName,
  }));

  return (
    <>
      {isHome && <Sidebar items={items} />}
      {!isHome && <DestopNav items={items} />}
      <MobileNav items={items} socials={socials} />
    </>
  );
};

export default Menu;
