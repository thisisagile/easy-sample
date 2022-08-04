import { Handler, HealthResource, Service } from '@thisisagile/easy';
import { error, ExpressProvider, notFound } from '@thisisagile/easy-express';

export class SampleService extends Service {
  static readonly Movie = new SampleService('movie', new ExpressProvider());

  post = (): Handler[] => [notFound, error];

  start(): void {
    this.with(HealthResource);
    super.start();
  }
}
