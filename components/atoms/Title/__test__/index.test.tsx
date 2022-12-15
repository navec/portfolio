import Title from '@/components/atoms/Title';
import { renderTestingWrapper } from '@/test/test-utils';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

describe(`${Title.name} Atom`, () => {
  test.each(['Home', 'Resume', 'Contact', 'About me'])(
    'Should display a level 1 title with %s',
    (name) => {
      renderTestingWrapper(<Title>{name}</Title>);

      expect(
        screen.getByRole('heading', { level: 1, name })
      ).toBeInTheDocument();
    }
  );
});
