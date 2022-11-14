import { NotFoundException } from './helper/exception/not-found.exception';
import { PageController } from './page/controllers/page.controller';
import { PageRepository } from './page/repositories/page.repository';
import { PageService } from './page/services/page.service';

type ControllerInstance = PageController;
export enum Module {
  page = 'page',
}

export class ControllerFactory {
  private static instanceMapper = new Map<Module, ControllerInstance>();

  static getInstance(name: Module): PageController {
    const hasInstance = this.instanceMapper.has(name);
    if (hasInstance) {
      return this.instanceMapper.get(name)!;
    }
    return this.createInstance(name);
  }

  private static createInstance(name: Module) {
    if (Module.page === name) {
      const service = new PageService(new PageRepository());
      const controller = new PageController(service);
      this.instanceMapper.set(Module.page, controller);
      return controller;
    }
    throw new NotFoundException('Instance not found');
  }
}
