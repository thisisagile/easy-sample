import { MovieMap } from '../../src/data/MovieMap';

describe('MovieMap', () => {

  const data =  {
    Title: "Monty Python's Life of Brian",
    Year: "1979",
    imdbID: "tt0079470",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMzAwNjU1OTktYjY3Mi00NDY5LWFlZWUtZjhjNGE0OTkwZDkwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  };

  const movie =  {
    id: "tt0079470",
    title: "Monty Python's Life of Brian",
    year: "1979",
    poster: "https://m.media-amazon.com/images/M/MV5BMzAwNjU1OTktYjY3Mi00NDY5LWFlZWUtZjhjNGE0OTkwZDkwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  };

  const map = new MovieMap();

  test('It works', () => {
    const brian = map.in(data);
    expect(brian).toMatchObject(movie);
  });
});
