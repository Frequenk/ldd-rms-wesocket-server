import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { of } from 'rxjs';
import * as url from 'url';
import { CacheService } from './cache.service';

interface DishType {
  id: number;
  name: string;
  img: string;
  price: number;
  dish_num: number;
  dish_type_id: number;
}

interface PayloadType {
  val: number;
  dish: DishType;
}

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer() server;
  constructor(private cacheService: CacheService) {}

  private clientsArr: any[] = [];

  handleConnection(client: any) {
    console.log('有人链接了' + client.id);
  }

  handleDisconnect(client: any) {}

  @SubscribeMessage('shoppingCar')
  async addCart(client: any, payload) {
    console.log(payload);

    const tableid = url.parse(client.request.url, true).query
      .tableid; /*获取房间号 获取桌号*/
    client.join(tableid);
    // this.server.to(tableid).emit('shoppingCar', payload); //广播所有人包含自己
    await this.cacheService.set('key66', 'value66');
    client.broadcast.to(tableid).emit('shoppingCar', payload); //不包括自己
  }
}
