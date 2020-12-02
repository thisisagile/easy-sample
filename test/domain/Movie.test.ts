import movies from "../ref/movies.json";
import { Movie } from '../../src/domain/Movie';
import "@thisisagile/easy-test";

describe('Movie', () => {

  test('Movie maps correctly', () => {
    const m = new Movie(movies[0]);
    expect(m.id).toBe(movies[0].imdbID);
    expect(m.title).toBe(movies[0].Title);
    expect(m.year).toBe(movies[0].Year);
    expect(m.poster).toBe(movies[0].Poster);
  });

  test("Movie is valid", () => {
    const m = new Movie(movies[0]);
    expect(m).toBeValid();
  });

  test("Movie is invalid", () => {
    const m = new Movie({ Title: "Man on the Moon" });
    expect(m).not.toBeValid();
  });
});
