import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

type MenuItem = { name: string };
type MenuProps = { items?: MenuItem[] };

const NavContent = ({
  closeMenu,
  items,
}: {
  closeMenu: () => void;
  items: MenuItem[];
}) => (
  <ul>
    <li>
      <Button variant="link" onClick={closeMenu}>
        <SmallCloseIcon />
      </Button>
    </li>
    {items.map(({ name }: { name: string }) => (
      <li key={name}>{name}</li>
    ))}
  </ul>
);

const NavIcon = ({ openMenu }: { openMenu: () => void }) => (
  <Button variant="link" onClick={openMenu}>
    <HamburgerIcon />
  </Button>
);

const defaultData = [
  { name: "Home" },
  { name: "Work" },
  { name: "About" },
  { name: "Contact" },
];

const Menu = ({ items = defaultData }: MenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {isOpen && <NavContent closeMenu={closeMenu} items={items} />}
      {!isOpen && <NavIcon openMenu={openMenu} />}
    </>
  );
};

export default Menu;
