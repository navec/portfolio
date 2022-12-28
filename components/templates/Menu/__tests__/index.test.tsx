import { mockNextRouter, renderTestingWrapper } from '@/test/test-utils';
import { screen } from '@testing-library/react';
import Menu from '..';

mockNextRouter();

describe(`${Menu.name} template`, () => {
  test('should display default menu items', () => {
    renderTestingWrapper(<Menu />);

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'About me' })).toHaveAttribute('href', '/about-me');
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '/resume');
    expect(screen.getByRole('link', { name: 'Portfolio' })).toHaveAttribute('href', '/portfolio');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
    expect(screen.getByRole('link', { name: 'Github' })).toHaveAttribute('href', 'https://github.com/navec');
    expect(screen.getByRole('link', { name: 'Linkedin' })).toHaveAttribute(
      'href',
      'https://fr.linkedin.com/in/gael-batchi-94714a84'
    );
  });
});
