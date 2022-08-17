import { Icon } from '@chakra-ui/react';
import { AiFillMessage } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { MdBusinessCenter } from 'react-icons/md';
import * as S from './styles';

const defaultData = [
  { name: 'Home', icon: HiHome },
  { name: 'About', icon: FaUserAlt },
  { name: 'Work', icon: MdBusinessCenter },
  { name: 'Contact', icon: AiFillMessage },
];

const Menu = () => {
  return (
    <S.Nav as="ul">
      {defaultData.map(({ name, icon }) => (
        <S.NavItem key={name}>
          <Icon as={icon} />
        </S.NavItem>
      ))}
    </S.Nav>
  );
};

export default Menu;
