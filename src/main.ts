import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import 'winston-daily-rotate-file';
const transportInfo = new winston.transports.DailyRotateFile({
  filename: './logs/Info/%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  level: 'info',
});
const transportError = new winston.transports.DailyRotateFile({
  filename: './logs/Error/%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  level: 'error',
});
const myFormat = winston.format.printf(
  ({ level, message, label, timestamp }) => {
    return `[${new Date(
      timestamp,
    ).toLocaleString()}] [${label}] ${level}: ${message}`;
  },
);
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      format: winston.format.combine(
        winston.format.label({ label: 'system' }),
        winston.format.timestamp(),
        myFormat,
      ),
      transports: [transportInfo, transportError],
    }),
  });
  await app.listen(3001);
  console.log('app start at http://localhost:3001');
}
bootstrap();
