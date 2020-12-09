import { SelectMovie } from '../../src/process/SelectMovie';
import { MoviesResource } from '../../src/services/MoviesResource';
import { mock } from '@thisisagile/easy-test';
import { EasyRequest } from '@thisisagile/easy';

describe('MoviesResource', () => {

  const select = new SelectMovie();
  let resource: MoviesResource;
  let req = { q: 42 } as unknown as EasyRequest;

  beforeEach(() => {
    resource = new MoviesResource(select);
  });

  test('search works', async () => {
    select.search = mock.resolve();
    await resource.search(req);
    expect(select.search).toHaveBeenCalledWith(42);
  });
});
