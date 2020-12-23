import { MoviesResource } from './services/MoviesResource';
import { MovieResource } from './services/MovieResource';
import { service } from './services/Service';

service('Movie')
  .with(MoviesResource, MovieResource)
  .listensAt(9001);
