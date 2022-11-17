import PAGE_DATA from '@/lib/data/pages';
import { NotFoundException } from '@/lib/helper/exception/not-found.exception';

export const getDataByPageName = (name: string) => {
  const data = PAGE_DATA[name];
  if (!data) {
    throw new NotFoundException(`No data found for ${name} page`);
  }
  return data;
};
