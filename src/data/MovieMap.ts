import { Mapper } from '@thisisagile/easy';

export class MovieMap extends Mapper {
  readonly id = this.map.item('imdbID');
  readonly title = this.map.item('Title');
  readonly year = this.map.item('Year');
  readonly poster = this.map.item('Poster');
}
