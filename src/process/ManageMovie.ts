import { Movie } from '../domain/Movie';
import { Manage } from '@thisisagile/easy';
import { MovieRepo } from '../domain/MovieRepo';

export class ManageMovie extends Manage<Movie> {
  constructor(readonly movies = new MovieRepo()) {super(movies); }
}
