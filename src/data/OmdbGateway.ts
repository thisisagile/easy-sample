import { Exception, Id, Json, List, RequestOptions, RouteGateway, when } from '@thisisagile/easy';
import { OmdbUri } from './OmdbUri';

export class OmdbGateway extends RouteGateway {

  search = (q: unknown): Promise<List<Json>> =>
    this.api.get(OmdbUri.Movies.key('ea375677').query(q), RequestOptions.Json, r => r.Search)
      .then(r => r.body.data.items);

  byId = async (id: Id): Promise<Json> =>
    this.api.get(OmdbUri.Movies.key('ea375677').id(id), RequestOptions.Json)
      .then(r => when(r.body.data.items.first()).contains(j => j.Error).reject(j => Exception.DoesNotExist.because(j.Error)));
}
