import { EasyUri, uri } from '@thisisagile/easy';

export class MovieUri extends EasyUri {
  readonly host = uri.host('http://localhost:9001');

  static readonly movies = uri.segment('movies');
  static readonly Movies = new MovieUri([MovieUri.movies]);
  static readonly Movie = new MovieUri([MovieUri.movies, MovieUri.id]);
}
