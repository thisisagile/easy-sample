import { Repo } from '@thisisagile/easy';
import { Movie } from './Movie';
import { OmdbGateway } from '../data/OmdbGateway';

export class MovieRepo extends Repo<Movie> {
  constructor(readonly movies = new OmdbGateway()) {
    super(Movie, movies);
  }
}
