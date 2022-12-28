import { Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { IconType } from 'react-icons/lib';
import * as S from './styles';

type MobileNavItemProps = {
  href: string;
  icon: IconType;
  value: string;
  isSelected?: boolean;
};

const MobileNavItem = ({ href, icon, value, isSelected = false }: MobileNavItemProps) => {
  return (
    <S.Layout selected={isSelected}>
      <Link href={href}>
        <a style={{ display: 'flex', alignItems: 'center' }}>
          <Icon as={icon} />
          <Text as="span" ml="4">
            {value}
          </Text>
        </a>
      </Link>
    </S.Layout>
  );
};

export default MobileNavItem;
