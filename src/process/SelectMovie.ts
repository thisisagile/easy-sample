import { Movie } from '../domain/Movie';
import { Search } from '@thisisagile/easy';
import { MovieRepo } from '../domain/MovieRepo';

export class SelectMovie extends Search<Movie> {
  constructor(readonly movies = new MovieRepo()) {
    super(movies);
  }
}
