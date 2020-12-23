import { Entity, Id, Json, required } from '@thisisagile/easy';

export class Movie extends Entity {
  @required() readonly id: Id = this.state.imdbID;
  @required() readonly title: string = this.state.Title;
  @required() readonly year: number = this.state.Year;
  readonly poster: string = this.state.Poster;

  update = (add?: Json): Movie => new Movie(this.toJSON(add));
}
