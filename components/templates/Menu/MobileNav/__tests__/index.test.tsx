import { renderTestingWrapper } from '@/test/test-utils';
import { screen } from '@testing-library/react';
import { MdPhone, MdWork } from 'react-icons/md';
import MobileNav from '..';

describe(`${MobileNav.name} template`, () => {
  test('Should display item with active class', () => {
    renderTestingWrapper(
      <MobileNav
        items={[{ id: 'id', href: '#', icon: MdWork, isSelected: true, name: 'name' }]}
        socials={[{ id: 'social_id', href: '/social_href', name: 'social_name', icon: MdPhone }]}
      />
    );

    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'name' })).toHaveAttribute('href', '/#');
    expect(screen.getByRole('link', { name: 'social_name' })).toHaveAttribute('href', '/social_href');
    expect(screen.getByText('© 2022 - GAEL BATCHI')).toBeInTheDocument();
  });

  test('Should display item without active class ', () => {
    renderTestingWrapper(
      <MobileNav
        items={[{ id: 'id', href: '#', icon: MdWork, isSelected: false, name: 'name' }]}
        socials={[{ id: 'social_id', href: '/social_href', name: 'social_name', icon: MdPhone }]}
      />
    );

    expect(screen.getByRole('link', { name: 'name' })).toHaveAttribute('href', '/#');
  });
});
