import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsedataService } from './usedata/usedata.service';
import { UsedataController } from './usedata/usedata.controller';
import dataConfig from '../config/data.configuration';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dataConfig],
    }),
  ],
  controllers: [AppController, UsedataController],
  providers: [AppService, UsedataService],
})
export class AppModule {}
