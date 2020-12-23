import { Uri, uri } from '@thisisagile/easy';

export class MovieUri extends Uri {

  readonly host = uri.host("http://localhost:9001");
  readonly resource = uri.segment('movie');

  static readonly movies = uri.segment("movies");

  static readonly Movies = new MovieUri([MovieUri.movies]);
  static readonly Movie = new MovieUri([MovieUri.movies, MovieUri.id]);
}
