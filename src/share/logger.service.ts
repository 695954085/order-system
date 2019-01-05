import { LoggerService, Injectable } from '@nestjs/common';
import * as winston from 'winston';
import * as path from 'path';

const { combine, timestamp, simple } = winston.format;

@Injectable()
export class MyLogger implements LoggerService {
  readonly logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      format: combine(timestamp(), simple()),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          dirname: path.join(__dirname, '../../logs'),
          filename: 'combined.log',
        }),
      ],
    });
  }

  log(message: any, context?: string) {
    const msg = `${context} ${message}`;
    this.logger.info(msg);
  }
  error(message: any, trace?: string, context?: string) {
    this.logger.error(message);
  }
  warn(message: any, context?: string) {
    this.logger.warn(message);
  }
}
