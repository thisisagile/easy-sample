import { error, Handler, notFound, Service } from '@thisisagile/easy';

export class SampleService extends Service {

  static readonly Movie = new SampleService('movie');

  post = (): Handler[] => [notFound, error];
}