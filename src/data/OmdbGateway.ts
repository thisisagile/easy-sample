import { OmdbUri } from './OmdbUri';
import { RouteGateway } from '@thisisagile/easy/dist/services/RouteGateway';
import { Json } from '@thisisagile/easy/src/types';
import { List } from '@thisisagile/easy/src/types/List';

export class OmdbGateway extends RouteGateway {
  readonly route = OmdbUri.Movies.key('ea375677');
  readonly routeId = OmdbUri.Movie.key('ea375677');

  search = (q: unknown): Promise<List<Json>> => this.api.get(this.route.query(q), r => r.data.Search).then(r => r.data.items);
}
