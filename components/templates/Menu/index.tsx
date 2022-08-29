import { Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { AiFillMessage } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { MdBusinessCenter } from 'react-icons/md';
import * as S from './styles';

const defaultData = [
  { name: 'Home', icon: HiHome, id: 'home' },
  { name: 'About', icon: FaUserAlt, id: 'about' },
  { name: 'Works', icon: MdBusinessCenter, id: 'works' },
  { name: 'Contact', icon: AiFillMessage, id: 'contact' },
];

const Menu = () => {
  return (
    <S.Nav as="ul">
      {defaultData.map(({ name, icon, id }) => (
        <Link key={id} href={`#${id}`}>
          <S.NavItem>
            <Icon as={icon} />
          </S.NavItem>
        </Link>
      ))}
    </S.Nav>
  );
};

export default Menu;
