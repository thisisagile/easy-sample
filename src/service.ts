import { MoviesResource } from './services/MoviesResource';
import { MovieResource } from './services/MovieResource';
import { service } from '../dist/services/Service';

service('Movie')
  .with(MoviesResource, MovieResource)
  .listensAt(9001);
