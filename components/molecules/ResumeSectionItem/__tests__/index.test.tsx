import { renderTestingWrapper } from '@/test/test-utils';
import { screen } from '@testing-library/react';
import ResumeSectionItem from '..';

describe(`${ResumeSectionItem.name} molecules`, () => {
  test('Should display title description and tag', () => {
    renderTestingWrapper(
      <ResumeSectionItem description="description" tag="tag" title="title" />
    );

    expect(
      screen.getByRole('heading', { name: 'title', level: 3 })
    ).toBeInTheDocument();
    expect(screen.getByText('description')).toBeInTheDocument();
    expect(screen.getByText('tag')).toBeInTheDocument();
  });
});
