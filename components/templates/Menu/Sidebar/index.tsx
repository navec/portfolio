import { MenuItemProps } from '@/components/templates/Menu';
import Link from 'next/link';

import * as S from './style';

type SidebarProps = MenuItemProps & { isSelected: boolean };

const Sidebar = ({ items }: { items: SidebarProps[] }) => {
  return (
    <S.Menu spacing={3}>
      {items.map(({ id, icon, href, isSelected }) => (
        <S.MenuItem className={isSelected ? 'active' : undefined} key={id}>
          <Link href={href}>
            <a>
              <S.Icon as={icon} />
            </a>
          </Link>
        </S.MenuItem>
      ))}
    </S.Menu>
  );
};

export default Sidebar;
