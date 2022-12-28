import { renderTestingWrapper } from '@/test/test-utils';
import { screen } from '@testing-library/react';
import Link from '..';

describe(`${Link.name} Molecule`, () => {
  test('Should display text link by default', () => {
    renderTestingWrapper(<Link href="#">CTA</Link>);
    expect(screen.getByRole('link', { name: 'CTA' })).toBeInTheDocument();
  });
  test('Should display text link', () => {
    renderTestingWrapper(
      <Link href="#" type="text">
        CTA
      </Link>
    );
    expect(screen.getByRole('link', { name: 'CTA' })).toBeInTheDocument();
  });

  test('Should display link with target blank', () => {
    renderTestingWrapper(
      <Link href="#" isExternal={true}>
        External CTA
      </Link>
    );
    const linkBtn = screen.getByRole('link', { name: 'External CTA' });
    expect(linkBtn).toBeInTheDocument();
    expect(linkBtn).toHaveAttribute('target', '_blank');
    expect(linkBtn).toHaveAttribute('href', '/#');
  });

  test('Should display callto link ', () => {
    renderTestingWrapper(
      <Link href="#" type="callto">
        Call to btn
      </Link>
    );

    const callToBtn = screen.getByRole('link', { name: 'Call to btn' });
    expect(callToBtn).toBeInTheDocument();
    expect(callToBtn).toHaveAttribute('href', 'callto:#');
  });

  test('Should  display tel link', () => {
    const tel = '+33666666666';
    renderTestingWrapper(
      <Link href={tel} type="tel">
        {tel}
      </Link>
    );

    const callToBtn = screen.getByRole('link', { name: '+33666666666' });
    expect(callToBtn).toBeInTheDocument();
    expect(callToBtn).toHaveAttribute('href', 'tel:+33666666666');
  });

  test('Should  display fax link', () => {
    const fax = '+33166666666';
    renderTestingWrapper(
      <Link href={fax} type="fax">
        {fax}
      </Link>
    );

    const callToBtn = screen.getByRole('link', { name: '+33166666666' });
    expect(callToBtn).toBeInTheDocument();
    expect(callToBtn).toHaveAttribute('href', 'fax:+33166666666');
  });

  test('Should  display mailto link', () => {
    const mailto = 'john_doe@gmail.com';
    renderTestingWrapper(
      <Link href={mailto} type="mailto">
        {mailto}
      </Link>
    );

    const callToBtn = screen.getByRole('link', { name: 'john_doe@gmail.com' });
    expect(callToBtn).toBeInTheDocument();
    expect(callToBtn).toHaveAttribute('href', 'mailto:john_doe@gmail.com');
  });
});
