import { renderTestingWrapper } from '@/test/test-utils';
import { screen } from '@testing-library/react';
import { MdWork } from 'react-icons/md';
import Sidebar from '..';

describe(`${Sidebar.name} template`, () => {
  test('Should display items', () => {
    renderTestingWrapper(<Sidebar items={[{ id: 'id', href: '#', icon: MdWork, isSelected: false, name: 'name' }]} />);
    expect(screen.getByRole('link', { name: '' })).toHaveAttribute('href', '/#');
  });
});
