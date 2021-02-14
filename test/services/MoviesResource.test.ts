import { SelectMovie } from '../../src/process/SelectMovie';
import { MoviesResource } from '../../src/services/MoviesResource';
import { mock } from '@thisisagile/easy-test';

describe('MoviesResource', () => {

  const select = new SelectMovie();
  let resource: MoviesResource;

  beforeEach(() => {
    resource = new MoviesResource(select);
  });

  test('search works', async () => {
    select.search = mock.resolve();
    await resource.search(mock.req.q(42));
    expect(select.search).toHaveBeenCalledWith(42);
  });
});
