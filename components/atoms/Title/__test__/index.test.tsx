import Title from '@/components/atoms/Title';
import { theme } from '@/components/theme/index-bis';
import { ThemeProvider } from '@emotion/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe(`${Title.name} Atom`, () => {
  test.each(['Home', 'Resume', 'Contact', 'About me'])(
    'Should display a level 1 title with %s',
    (name) => {
      render(
        <ThemeProvider theme={theme}>
          <Title>{name}</Title>
        </ThemeProvider>
      );

      expect(
        screen.getByRole('heading', { level: 1, name })
      ).toBeInTheDocument();
    }
  );
});
