import { SelectMovie } from '../../src/process/SelectMovie';
import { mock } from '@thisisagile/easy-test';
import { EasyRequest } from '@thisisagile/easy';
import { MovieResource } from '../../src/services/MovieResource';

describe('MovieResource', () => {

  const select = new SelectMovie();
  let resource: MovieResource;
  let req = { id: 42 } as unknown as EasyRequest;

  beforeEach(() => {
    resource = new MovieResource(select);
  });

  test('byId works', async () => {
    select.byId = mock.resolve();
    await resource.byId(req);
    expect(select.byId).toHaveBeenCalledWith(42);
  });
});
