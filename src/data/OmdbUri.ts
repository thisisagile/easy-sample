import { Uri, uri } from '@thisisagile/easy';

export class OmdbUri extends Uri {

  static readonly key = uri.query('apikey');
  static readonly id = uri.query('i');
  static readonly query = uri.query('s');

  static readonly Movies = new OmdbUri([OmdbUri.key, OmdbUri.query]);
  static readonly Movie = new OmdbUri([OmdbUri.key, OmdbUri.id]);

  readonly host = uri.host('https://www.omdbapi.com');
  readonly resource = uri.segment();

  key = (key: string): this => this.set(OmdbUri.key, key);
  id = (id: unknown): this => this.set(OmdbUri.id, id);
  query = (q: unknown): this => this.set(OmdbUri.query, q);
}
