import { MovieRepo } from '../../src/domain/MovieRepo';
import { SelectMovie } from '../../src/process/SelectMovie';

describe('SelectMovie', () => {

  test('new works', () => {
    const select = new SelectMovie();
    expect(select.movies).toBeInstanceOf(MovieRepo);
  });
});
