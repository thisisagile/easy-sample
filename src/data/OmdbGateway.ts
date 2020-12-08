import { OmdbUri } from './OmdbUri';
import { Json, List, RouteGateway } from '@thisisagile/easy';

export class OmdbGateway extends RouteGateway {

  readonly route = OmdbUri.Movies.key('ea375677');
  readonly routeId = OmdbUri.Movie.key('ea375677');

  search = (q: unknown): Promise<List<Json>> => this.api.get(this.route.query(q), r => r.data.Search).then(r => r.data.items);
}
