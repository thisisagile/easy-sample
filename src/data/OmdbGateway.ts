import { Id, Json, List, RouteGateway } from '@thisisagile/easy';
import { OmdbUri } from './OmdbUri';

export class OmdbGateway extends RouteGateway {

  search = (q: unknown): Promise<List<Json>> =>
    this.api.get(OmdbUri.Movies.key('ea375677').query(q), r => r.data.Search).then(r => r.data.items);

  byId = (id: Id): Promise<Json> =>
    this.api.get(OmdbUri.Movies.key('ea375677').id(id), r => r.data).then(r => r.data.items.first());
}
