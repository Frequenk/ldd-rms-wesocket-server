import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  findAll() {
    return [
      { title: '新闻111' },
      { title: '新闻2222' },
      { title: '新闻3333' },
      { title: '新闻111' },
      { title: '新闻2222' },
      { title: '新闻3333' },
    ];
  }
}
