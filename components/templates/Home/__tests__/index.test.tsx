import { renderTestingWrapper } from '@/test/test-utils';
import { screen } from '@testing-library/react';
import Home from '..';

describe(`${Home.name} template`, () => {
  test('Should', () => {
    renderTestingWrapper(
      <Home
        title="title"
        subTitle="subtitle"
        poster="poster"
        tag="tag"
        text="text"
        action={{ name: 'action_name', link: 'action_link' }}
      />
    );

    expect(screen.getByRole('heading', { level: 1, name: 'title' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'subtitle' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'action_name' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'action_name' })).toHaveAttribute('href', '/action_link');

    expect(screen.getByText('text')).toBeInTheDocument();
    expect(screen.getByText('tag')).toBeInTheDocument();
  });
});
