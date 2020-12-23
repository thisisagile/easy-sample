import { Constructor, list, List } from '@thisisagile/easy';
import { ExpressProvider } from '../../dist/services/ExpressProvider';

export class Service {
  constructor(readonly name: string, private app = new ExpressProvider(), private resources: List<Constructor> = list()) {}

  with = (...resources: Constructor[]): this => {
    this.resources.add(...resources);
    return this;
  };

  listensAt = (port: number) => {
    this.resources.forEach(res => this.app.route(res));
    this.app.listen(port, `Service ${this.name} listening on port ${port} with ${this.resources.length} resources.`);
  };
}

export const service = (name: string): Service => new Service(name);


