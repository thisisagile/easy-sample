import { MovieMap } from '../../src/data/MovieMap';
import omdb from '../ref/omdb.json';
import movies from '../ref/movies.json';

describe('MovieMap', () => {

  const map = new MovieMap();

  test('It works', () => {
    const brian = map.in(omdb[0]);
    expect(brian).toMatchObject(movies[0]);
  });
});
