import { MovieMap } from '../../src/data/MovieMap';
import { movie, omdb } from '../ref/data';

describe('MovieMap', () => {

  const map = new MovieMap();

  test('It works', () => {
    const brian = map.in(omdb);
    expect(brian).toMatchObject(movie);
  });
});
