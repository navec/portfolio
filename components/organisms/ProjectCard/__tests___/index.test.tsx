import { renderTestingWrapper } from '@/test/test-utils';
import { screen } from '@testing-library/react';
import ProjectCard from '..';

describe(`${ProjectCard.name} organisms`, () => {
  test('Should display project card', () => {
    renderTestingWrapper(<ProjectCard description="description" poster="poster" preview="preview" source="source" tags={['tag_1', 'tag_2']} title="title" />);

    expect(screen.getByRole('heading', { level: 2, name: 'title' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4, name: 'Tech stack' })).toBeInTheDocument();

    expect(screen.getByRole('img', { name: 'title' })).toHaveAttribute('src', 'poster');

    expect(screen.getByRole('link', { name: 'Live Preview' })).toHaveAttribute('href', '/preview');
    expect(screen.getByRole('link', { name: 'Source Code' })).toHaveAttribute('href', '/source');

    expect(screen.getByText('description')).toBeInTheDocument();
    expect(screen.getByText('tag_1')).toBeInTheDocument();
    expect(screen.getByText('tag_2')).toBeInTheDocument();
  });
});
