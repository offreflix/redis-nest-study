import { InjectRedis } from '@nestjs-modules/ioredis';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class AppService {
  constructor(@InjectRedis() private readonly redisClient: Redis) {}

  async getHello(key: string): Promise<string> {
    const value = await this.redisClient.get(key);

    if (!value) throw new NotFoundException();

    return value;
  }

  async setHello(key: string, value: string): Promise<string> {
    const newValue = await this.redisClient.set(key, value);

    if (newValue !== 'OK') throw new BadRequestException();

    const savedValue = await this.getHello(key);

    return savedValue;
  }
}
