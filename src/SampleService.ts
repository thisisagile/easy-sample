import { error, ExpressProvider, Handler, HealthResource, notFound, Service } from '@thisisagile/easy';

export class SampleService extends Service {

  static readonly Movie = new SampleService('movie', new ExpressProvider());

  post = (): Handler[] => [notFound, error];

  start(): void {
    this.with(HealthResource);
    super.start();
  };
}