import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import axios from 'axios';

async function bootstrap() {
  // 初始化请求工具
  // axios.defaults.baseURL = 'http://leiduoduo.free.idcfengye.com';
  axios.defaults.baseURL = 'http://192.168.137.52:9005/';

  // 添加响应拦截器
  axios.interceptors.response.use(
    function (response) {
      console.log('response', response);
      const {
        data: { data, errorcode, msg },
      } = response;
      // if (errorcode !== 0) showToast({ title: msg, icon: 'none' });
      return data;
    },
    function (error) {
      return Promise.reject(error);
    },
  );
  // 添加请求拦截器
  axios.interceptors.request.use(
    function (config) {
      console.log('config', config);
      // config.headers.Authorization = `Bearer ${tokens}`
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
