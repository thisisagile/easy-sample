import { MoviesResource } from './services/MoviesResource';
import { MovieResource } from './services/MovieResource';
import { SampleService } from './SampleService';

SampleService.Movie
  .with(MoviesResource, MovieResource)
  .atPort(9001)
  .start();
