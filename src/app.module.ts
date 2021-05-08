import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { bullmqModule } from './bullmq/bullmq.modules';
import { GraphQLModule } from '@nestjs/graphql';
import schema from './bullmq_compose/schema';
@Module({
  imports: [GraphQLModule.forRoot({ schema }), bullmqModule],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
