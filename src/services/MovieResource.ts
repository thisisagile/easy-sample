import { EasyRequest, get, route } from '@thisisagile/easy';
import { SelectMovie } from '../process/SelectMovie';
import { Movie } from '../domain/Movie';
import { MovieUri } from './MovieUri';

@route(MovieUri.Movie)
export class MovieResource {
  constructor(readonly select = new SelectMovie()) {}

  @get()
  byId = (req: EasyRequest): Promise<Movie> => this.select.byId(req.id);
}
