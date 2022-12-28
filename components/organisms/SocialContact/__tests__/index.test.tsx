import { renderTestingWrapper } from '@/test/test-utils';
import { screen } from '@testing-library/react';
import { MdWork } from 'react-icons/md';
import SocialContact from '..';

describe(`${SocialContact.name} organisms`, () => {
  test('Should display social contact', () => {
    renderTestingWrapper(
      <SocialContact
        socials={[
          {
            icon: MdWork,
            title: 'title',
            content: { type: 'text', value: 'content_value', alias: 'alias_value' },
          },
        ]}
      />
    );

    expect(screen.getByRole('heading', { level: 3, name: 'title' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'alias_value' })).toHaveAttribute('href', '/content_value');
  });

  test('Should display social contact', () => {
    renderTestingWrapper(
      <SocialContact
        socials={[
          {
            icon: MdWork,
            title: 'title',
            content: { type: 'text', value: 'content_value' },
          },
        ]}
      />
    );

    expect(screen.getByRole('heading', { level: 3, name: 'title' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'content_value' })).toHaveAttribute('href', '/content_value');
  });
});
