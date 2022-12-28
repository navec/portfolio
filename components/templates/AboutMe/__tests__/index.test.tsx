import { renderTestingWrapper } from '@/test/test-utils';
import { screen } from '@testing-library/react';
import { MdWork } from 'react-icons/md';
import AboutMe from '..';

describe(`${AboutMe.name} template`, () => {
  test('should display about-me', () => {
    const stats = [
      { value: 'value_1', description: 'description_1' },
      { value: 'value_2', description: 'description_2' },
    ];
    const jobItems = [
      { icon: MdWork, title: 'item_title_1', description: 'item_description_1' },
      { icon: MdWork, title: 'item_title_2', description: 'item_description_2' },
    ];
    renderTestingWrapper(
      <AboutMe
        description="description"
        subtitle="subtitle"
        summary={{
          stats: stats,
          job: { title: 'job_title', items: jobItems },
        }}
        title="title"
      />
    );

    expect(screen.getByRole('heading', { level: 1, name: 'title' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'subtitle' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'job_title' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4, name: 'item_title_1' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4, name: 'item_title_2' })).toBeInTheDocument();

    expect(screen.getByText('item_title_2')).toBeInTheDocument();

    expect(screen.getByText('description')).toBeInTheDocument();
    expect(screen.getByText('item_description_1')).toBeInTheDocument();
    expect(screen.getByText('item_description_2')).toBeInTheDocument();

    expect(screen.getByText('value_1')).toBeInTheDocument();
    expect(screen.getByText('description_1')).toBeInTheDocument();
    expect(screen.getByText('value_2')).toBeInTheDocument();
    expect(screen.getByText('description_2')).toBeInTheDocument();
  });
});
