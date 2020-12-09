import { Movie } from '../domain/Movie';
import { EasyRequest, get, List, route } from '@thisisagile/easy';
import { SelectMovie } from '../process/SelectMovie';
import { MovieUri } from './MovieUri';

@route(MovieUri.Movies)
export class MoviesResource {
  constructor(readonly select = new SelectMovie()) {}

  @get()
  search = (req: EasyRequest): Promise<List<Movie>> => this.select.search(req.q);
}
