import { useRouter } from 'next/router';

export const useLocation = () => {
  const { pathname, ...rest } = useRouter();
  const formattedPathname = pathname.replace('/', '');
  const isHomePage = formattedPathname === '';
  const pageName = isHomePage ? 'home' : formattedPathname;

  return { isHomePage, pageName, ...rest };
};
