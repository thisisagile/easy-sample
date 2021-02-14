import { OmdbUri } from '../../src/data/OmdbUri';
import "@thisisagile/easy-test";

describe('OmdbUri', () => {

  test("Route Movies matches", () => {
    expect(OmdbUri.Movies.key("42")).toMatchRoute("https://www.omdbapi.com?apikey=42");
    expect(OmdbUri.Movies.key("42").query("Brian")).toMatchRoute("https://www.omdbapi.com?apikey=42&s=Brian");
  });

  test("Route Movie matches", () => {
    expect(OmdbUri.Movie.key("42").id(3434)).toMatchRoute("https://www.omdbapi.com?apikey=42&i=3434");
  });
});
