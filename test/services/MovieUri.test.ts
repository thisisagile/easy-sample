import '@thisisagile/easy-test';
import { MovieUri } from '../../src/services/MovieUri';

describe('MovieUri', () => {

  test('Route Movies matches', () => {
    expect(MovieUri.Movies).toMatchRoute('/movie/movies');
    expect(MovieUri.Movies.query('Brian')).toMatchRoute('?q=Brian');
  });
  test('Route Movie matches', () => {
    expect(MovieUri.Movie.id(42)).toMatchRoute('/movie/movies/42');
  });
});
