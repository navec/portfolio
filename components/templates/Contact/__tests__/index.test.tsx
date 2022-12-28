import { renderTestingWrapper } from '@/test/test-utils';
import { screen } from '@testing-library/react';
import { MdWork } from 'react-icons/md';
import Contact from '..';

describe(`${Contact.name} template`, () => {
  test('Should', () => {
    renderTestingWrapper(
      <Contact
        title="title"
        subtitle="subtitle"
        description="description"
        endWord="endWord"
        socials={[
          {
            icon: MdWork,
            title: 'Social title',
            content: { type: 'tel', value: '+33666666666' },
          },
        ]}
      />
    );

    expect(screen.getByRole('heading', { level: 1, name: 'title' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'subtitle' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Social title' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '+33666666666' })).toHaveAttribute('href', 'tel:+33666666666');
    expect(screen.getByText('endWord')).toBeInTheDocument();
  });
});
