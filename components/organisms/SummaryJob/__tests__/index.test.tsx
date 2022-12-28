import { renderTestingWrapper } from '@/test/test-utils';
import { screen } from '@testing-library/react';
import { MdWork } from 'react-icons/md';
import SummaryJob from '..';

describe(`${SummaryJob.name} organisms`, () => {
  test('Should display summary job', () => {
    const items = [
      { icon: MdWork, title: 'item_title_1', description: 'item_description_1' },
      { icon: MdWork, title: 'item_title_2', description: 'item_description_2' },
    ];
    renderTestingWrapper(<SummaryJob title="title" items={items} />);

    expect(screen.getByRole('heading', { level: 3, name: 'title' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4, name: 'item_title_1' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4, name: 'item_title_2' })).toBeInTheDocument();

    expect(screen.getByText('item_description_1')).toBeInTheDocument();
    expect(screen.getByText('item_description_2')).toBeInTheDocument();
  });
});
