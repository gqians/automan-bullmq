import { Module } from '@nestjs/common';
import { BullMQModule } from 'nestjs-bullmq';
import { bullmqController } from './bullmq.controller';
@Module({
  imports: [
    BullMQModule.forRoot({
      name: 'QueueName',
      config: {
        // url: 'redis://:password@localhost:6379',
        connection: { host: 'localhost', port: 16379, password: '123456' },
      },
    }),
  ],
  controllers: [bullmqController],
})
export class bullmqModule {}
