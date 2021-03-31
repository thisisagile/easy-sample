import { OmdbGateway } from '../../src/data/OmdbGateway';
import { fits, mock } from '@thisisagile/easy-test';
import { Api, HttpStatus, toList, toResponse } from '@thisisagile/easy';

describe('OmdbGateway', () => {
  const items = toList({ title: 'Life of Brian' });
  const api = new Api();
  let omdb: OmdbGateway;

  beforeEach(() => {
    omdb = new OmdbGateway(api);
  });

  test('Search triggers get', async () => {
    api.get = mock.resolve(toResponse(HttpStatus.Ok, items));
    const movies = await omdb.search('Brian');
    expect(api.get).toHaveBeenCalled();
    expect(movies.first()).toMatchObject(fits.with(items.first()));
  });

  test('byId triggers get', async () => {
    api.get = mock.resolve(toResponse(HttpStatus.Ok, items));
    const movie = await omdb.byId('Brian');
    expect(api.get).toHaveBeenCalled();
    expect(movie).toMatchObject(fits.with(items.first()));
  });
});
