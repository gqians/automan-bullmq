import { Controller } from '@nestjs/common';
import { InjectBullMQ, BullMQ } from 'nestjs-bullmq';
@Controller('schedule')
export class bullmqController {
  constructor(@InjectBullMQ('QueueName') private readonly bullMQ: BullMQ) {
    bullMQ.process(async (job) => {
      console.log('process 1');
    });
    bullMQ.process(async (job) => {
      console.log('process 2');
    });
  }
  // @Get()
  // async getHello() {
  //   // this.bullMQ.process(async (job) => {
  //   //   console.log('process1');
  //   // });
  //   // this.bullMQ.process(async (job) => {
  //   //   console.log('process2');
  //   // });
  //   this.bullMQ.queue.add('myJobName', { foo: 'bar' });
  //   // this.bullMQ.queueEvents.on();
  //   // this.bullMQ.queueScheduler.on();
  // }
  // @Get()
  // async getHelloo() {
  //   this.bullMQ.process(async (job) => {
  //     console.log('process3', job);
  //   });
  //   this.bullMQ.process(async (job) => {
  //     console.log('process4', job);
  //   });
  //   this.bullMQ.queue.add('myJobName', { foo: 'bar' });
  //   // this.bullMQ.queueEvents.on();
  //   // this.bullMQ.queueScheduler.on();
  // }
}
