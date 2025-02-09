import { Module, Global } from '@nestjs/common';
import { RedisModule as NestRedisModule } from '@nestjs-modules/ioredis';

@Global()
@Module({
  imports: [
    NestRedisModule.forRootAsync({
      useFactory: () => ({
        type: 'single',
        url: `${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
      }),
    }),
  ],
  exports: [NestRedisModule],
})
export class RedisModule {}
