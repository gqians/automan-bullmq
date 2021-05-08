import { Injectable, Inject, Logger, LoggerService } from '@nestjs/common';
@Injectable()
export class AppService {
  constructor(@Inject(Logger) private readonly logger: LoggerService) {}
  getHello() {
    this.logger.error('test');
    return 'Hello World11!';
  }
}
