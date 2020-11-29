import { OmdbUri } from './OmdbUri';
import { RouteGateway } from '@thisisagile/easy/dist/services/RouteGateway';

export class OmdbGateway extends RouteGateway {
  readonly route = OmdbUri.Movies.key('ea375677');
  readonly routeId = OmdbUri.Movie.key('ea375677');
}
