import { renderTestingWrapper } from '@/test/test-utils';
import { screen } from '@testing-library/react';
import Portfolio from '..';

describe(`${Portfolio.name} template`, () => {
  test('Should display portfolio template', () => {
    const projects = [
      {
        title: 'project_title',
        description: 'description',
        poster: 'poster',
        preview: 'preview',
        source: 'source',
        tags: ['tag_1', 'tag_2'],
      },
    ];
    renderTestingWrapper(<Portfolio title="title" projects={projects} />);

    expect(screen.getByRole('heading', { level: 1, name: 'title' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'project_title' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4, name: 'Tech stack' })).toBeInTheDocument();

    expect(screen.getByRole('img', { name: 'project_title' })).toHaveAttribute('src', 'poster');

    expect(screen.getByRole('link', { name: 'Live Preview' })).toHaveAttribute('href', '/preview');
    expect(screen.getByRole('link', { name: 'Source Code' })).toHaveAttribute('href', '/source');

    expect(screen.getByText('description')).toBeInTheDocument();
    expect(screen.getByText('tag_1')).toBeInTheDocument();
    expect(screen.getByText('tag_2')).toBeInTheDocument();
  });
});
