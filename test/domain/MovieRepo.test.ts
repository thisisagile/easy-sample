import { MovieRepo } from '../../src/domain/MovieRepo';
import { OmdbGateway } from '../../src/data/OmdbGateway';

describe('MovieRepo', () => {
  test('new works', () => {
    const repo = new MovieRepo();
    expect(repo.movies).toBeInstanceOf(OmdbGateway);
  });
});
