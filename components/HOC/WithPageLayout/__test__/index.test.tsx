import { mockNextRouter, renderTestingWrapper } from '@/test/test-utils';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import WithPageLayout from '..';

const MOBILE_NAV_ITEMS = [
  'Home',
  'About me',
  'Resume',
  'Portfolio',
  'Contact',
  'Github',
  'Linkedin',
];

describe(`${WithPageLayout.name} HOC`, () => {
  test('should display a component page with menu and wrapped component', () => {
    mockNextRouter({ pathname: 'about-me' });

    const Hoc = WithPageLayout(() => <>Fake testing content</>, 'title');
    renderTestingWrapper(<Hoc />);

    expect(screen.getByText('Fake testing content')).toBeInTheDocument();

    MOBILE_NAV_ITEMS.forEach((name) =>
      expect(screen.getByRole('menuitem', { name })).toBeInTheDocument()
    );
  });
});
