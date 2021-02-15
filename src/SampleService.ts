import { error, Handler, HealthResource, notFound, Service } from '@thisisagile/easy';

export class SampleService extends Service {

  static readonly Movie = new SampleService('movie');

  post = (): Handler[] => [notFound, error];

  start(): void {
    this.with(HealthResource);
    super.start();
  };
}