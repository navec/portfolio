import { MenuItemProps } from '@/components/templates/Menu';
import Link from 'next/link';

import * as S from './styles';

type DestopNavProps = MenuItemProps & { isSelected: boolean };

const DestopNav = ({ items }: { items: DestopNavProps[] }) => {
  return (
    <S.Layout>
      <S.Menu spacing={6}>
        {items.map(({ id, name, href, isSelected }) => (
          <S.MenuItem role="presentation" className={isSelected ? 'active' : undefined} key={id}>
            <Link href={href}>
              <a>{name}</a>
            </Link>
          </S.MenuItem>
        ))}
      </S.Menu>
    </S.Layout>
  );
};

export default DestopNav;
