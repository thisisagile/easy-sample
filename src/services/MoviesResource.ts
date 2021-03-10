import { Movie } from '../domain/Movie';
import { get, List, post, Req, route } from '@thisisagile/easy';
import { SelectMovie } from '../process/SelectMovie';
import { MovieUri } from './MovieUri';
import { ManageMovie } from '../process/ManageMovie';

@route(MovieUri.Movies)
export class MoviesResource {
  constructor(readonly select = new SelectMovie(), readonly manage = new ManageMovie()) {}

  @get()
  search = (req: Req): Promise<List<Movie>> => this.select.search(req.q);

  @post()
  add = (req: Req): Promise<Movie> => this.manage.add(req.body as any);
}
