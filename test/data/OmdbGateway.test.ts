import { OmdbUri } from '../../src/data/OmdbUri';
import { OmdbGateway } from '../../src/data/OmdbGateway';
import "@thisisagile/easy-test";

describe('OmdbGateway', () => {

  test('Routes are correct', () => {
    const og = new OmdbGateway();
    expect(og.route).toMatchRoute(OmdbUri.Movies);
    expect(og.routeId).toMatchRoute(OmdbUri.Movie);
  });
});
