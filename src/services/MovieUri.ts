import { Uri, uri } from '@thisisagile/easy';

export class MovieUri extends Uri {

  readonly resource = uri.segment('movie');
  static readonly movies = uri.segment("movies");

  static readonly Movies = new MovieUri([MovieUri.movies]);
  static readonly Movie = new MovieUri([MovieUri.movies, MovieUri.id]);
}
