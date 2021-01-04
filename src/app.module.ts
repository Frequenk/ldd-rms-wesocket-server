import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller';
import { NewsService } from './news/news.service';
import { EventsGateway } from './events.gateway';
import { RedisModule } from 'nestjs-redis';
import { CacheService } from './cache.service';

const options = {
  port: 6379,
  host: 'rms.leiduoduo.top',
  password: '',
  db: 0,
};
@Module({
  imports: [RedisModule.register(options)],
  controllers: [AppController, ArticleController],
  providers: [AppService, NewsService, EventsGateway, CacheService],
})
export class AppModule {}
