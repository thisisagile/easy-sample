import { Map } from '@thisisagile/easy';

export class MovieMap extends Map {
  readonly id = this.prop('imdbID');
  readonly title = this.prop('Title');
  readonly year = this.prop('Year');
  readonly poster = this.prop('Poster');
}
