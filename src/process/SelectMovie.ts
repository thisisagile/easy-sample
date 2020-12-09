import { Movie } from '../domain/Movie';
import { Select } from '@thisisagile/easy';
import { MovieRepo } from '../domain/MovieRepo';

export class SelectMovie extends Select<Movie> {
  constructor(readonly movies = new MovieRepo()) {super(movies); }
}
