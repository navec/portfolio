import { PageRepository } from '../repositories/page.repository';

export class PageService {
  constructor(private readonly pageRepository: PageRepository) {}

  getPageByName(name: string) {
    return this.pageRepository.getPageByName(name);
  }
}
