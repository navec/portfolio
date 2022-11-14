import { NotFoundException } from 'lib/helper/exception/not-found.exception';
import PAGE_DATA from '../../data/pages';

export class PageRepository {
  getPageByName(name: string) {
    const data = PAGE_DATA[name];
    if (!data) {
      throw new NotFoundException(`No data found for ${name} page`);
    }
    return data;
  }
}
