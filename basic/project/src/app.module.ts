import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CatsController } from './cats/cats.controller';
// import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos/todos.service';
import {
  Module,
  MiddlewareConsumer,
  RequestMethod,
  NestModule,
} from '@nestjs/common';

@Module({
  imports: [CatsModule],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .exclude({ path: 'cats', method: RequestMethod.POST })
      // .forRoutes(CatsController);
    .forRoutes(
      {
        path: 'cats',
        method: RequestMethod.GET,
      },
      {
        path: 'todo',
        method: RequestMethod.GET,
      }
    );
  }
}
