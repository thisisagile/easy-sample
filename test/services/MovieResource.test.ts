import { SelectMovie } from '../../src/process/SelectMovie';
import { mock } from '@thisisagile/easy-test';
import { MovieResource } from '../../src/services/MovieResource';

describe('MovieResource', () => {

  const select = new SelectMovie();
  let resource: MovieResource;

  beforeEach(() => {
    resource = new MovieResource(select);
  });

  test('byId works', async () => {
    select.byId = mock.resolve();
    await resource.byId(mock.req.id(42));
    expect(select.byId).toHaveBeenCalledWith(42);
  });
});
