import { renderTestingWrapper } from '@/test/test-utils';
import { screen } from '@testing-library/react';
import Resume from '..';

describe(`${Resume.name} template`, () => {
  test('Should', () => {
    const items = [{ title: 'item_title', description: 'description', tag: 'tag' }];
    renderTestingWrapper(<Resume title="title" sections={[{ title: 'section_title', items }]} />);

    expect(screen.getByRole('heading', { level: 1, name: 'title' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'section_title' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'item_title' })).toBeInTheDocument();

    expect(screen.getByText('tag')).toBeInTheDocument();
    expect(screen.getByText('description')).toBeInTheDocument();
  });
});
