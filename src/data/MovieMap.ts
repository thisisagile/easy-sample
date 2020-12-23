import { col, Map } from '@thisisagile/easy';

export class MovieMap extends Map {
  readonly id = col('imdbID');
  readonly title = col('Title');
  readonly year = col('Year');
  readonly poster = col('Poster');
}
