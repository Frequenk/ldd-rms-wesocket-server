import { Controller, Get } from '@nestjs/common';
import { NewsService } from '../news/news.service';

@Controller('article')
export class ArticleController {
  constructor(private newsService: NewsService) {}

  @Get()
  index(): any {
    return { data: '这里是article的index66776' };
  }
  @Get('all')
  all() {
    return { newsList: this.newsService.findAll() };
  }
}
