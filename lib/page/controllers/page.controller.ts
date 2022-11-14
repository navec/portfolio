import { PageService } from '../services/page.service';

export class PageController {
  constructor(private readonly service: PageService) {}

  getPageByName(name: string) {
    return this.service.getPageByName(name);
  }
}
