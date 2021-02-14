import { MoviesResource } from './services/MoviesResource';
import { MovieResource } from './services/MovieResource';
import { HealthResource } from '@thisisagile/easy';
import { SampleService } from './SampleService';

SampleService.Movie
  .with(MoviesResource, MovieResource)
  .with(HealthResource)
  .atPort(9001)
  .start();
