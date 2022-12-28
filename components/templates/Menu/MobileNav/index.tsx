import { useToggle } from '@/components/hooks/useToogle';
import { MenuItemProps } from '@/components/templates/Menu';
import Item from './MobileNavItem';

import * as S from './styles';

const YEAR = new Date().getFullYear();

type MobileNavProps = {
  items: (MenuItemProps & { isSelected: boolean })[];
  socials: MenuItemProps[];
};

const MobileNav = ({ items, socials }: MobileNavProps) => {
  const { isActive, toogle } = useToggle();

  return (
    <S.Layout>
      <S.MenuIcon className={isActive ? 'close' : 'show'} onClick={toogle} />

      <S.MenuContent
        direction="left"
        in={isActive}
        transition={{ exit: { duration: 0.4 } }}
      >
        <S.Label>Menu</S.Label>
        <S.Menu>
          {items.map(({ id, name, href, icon, isSelected }) => (
            <Item
              key={id}
              icon={icon}
              value={name}
              href={href}
              isSelected={isSelected}
            />
          ))}

          <S.Diviser />

          {socials.map(({ id, name, href, icon }) => (
            <Item key={id} icon={icon} value={name} href={href} />
          ))}
        </S.Menu>

        <S.Copyright>© {YEAR} - GAEL BATCHI</S.Copyright>
      </S.MenuContent>
    </S.Layout>
  );
};

export default MobileNav;
