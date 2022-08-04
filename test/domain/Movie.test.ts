import { Movie } from '../../src/domain/Movie';
import '@thisisagile/easy-test';
import movies from '../ref/movies.json';
import omdb from '../ref/omdb.json';
import { fits } from '@thisisagile/easy-test';

describe('Movie', () => {
  test('Movie maps correctly', () => {
    const m = new Movie(omdb[0]);
    expect(m.id).toBe(omdb[0].imdbID);
    expect(m.title).toBe(omdb[0].Title);
    expect(m.year).toBe(omdb[0].Year);
    expect(m.poster).toBe(omdb[0].Poster);
  });

  test('Movie is valid', () => {
    const m = new Movie(omdb[0]);
    expect(m).toBeValid();
  });

  test('Movie is invalid', () => {
    const m = new Movie({ Title: 'Man on the Moon' });
    expect(m).not.toBeValid();
  });

  test('Movie from data is correct', () => {
    const m = new Movie(omdb[0]);
    expect(m.id).toBe('tt0079470');
    expect(m.toJSON()).toEqual(fits.json(movies[0]));
  });
});
