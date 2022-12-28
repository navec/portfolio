import { renderTestingWrapper } from '@/test/test-utils';
import { screen } from '@testing-library/react';
import { MdWork } from 'react-icons/md';
import DestopNav from '..';

describe(`${DestopNav.name} template`, () => {
  test('Should display item with active calss', () => {
    renderTestingWrapper(<DestopNav items={[{ id: 'id', href: '#', icon: MdWork, isSelected: true, name: 'name' }]} />);

    expect(screen.getByRole('link', { name: 'name' })).toHaveAttribute('href', '/#');
    expect(screen.getByRole('presentation')).toHaveClass('active');
  });

  test('Should display item without active class ', () => {
    renderTestingWrapper(
      <DestopNav items={[{ id: 'id', href: '#', icon: MdWork, isSelected: false, name: 'name' }]} />
    );

    expect(screen.getByRole('link', { name: 'name' })).toHaveAttribute('href', '/#');
    expect(screen.getByRole('presentation')).not.toHaveClass('active');
  });
});
