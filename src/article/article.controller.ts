import { Controller, Get } from '@nestjs/common';
import { NewsService } from '../news/news.service';

@Controller('article')
export class ArticleController {
  constructor(private newsService: NewsService) {}

  @Get()
  index(): string {
    return '这里是article的index6677';
  }
  @Get('all')
  all() {
    return { newsList: this.newsService.findAll() };
  }
}
