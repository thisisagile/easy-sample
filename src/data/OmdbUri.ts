import { EasyUri, uri } from '@thisisagile/easy';

export class OmdbUri extends EasyUri {
  static readonly key = uri.query('apikey');
  static readonly id = uri.query('i');
  static readonly query = uri.query('s');

  static readonly Movies = new OmdbUri();
  static readonly Movie = new OmdbUri();

  readonly host = uri.host('https://www.omdbapi.com');
  readonly resource = uri.segment();

  key = (key: string): this => this.set(OmdbUri.key, key);
  id = (id: unknown): this => this.set(OmdbUri.id, id);
  query = (q: unknown): this => this.set(OmdbUri.query, q);
}
