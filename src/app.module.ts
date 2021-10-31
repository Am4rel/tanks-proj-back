import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { TankController } from './tank.controller';
import { TankService } from './tank.service';
import { TankSchema } from './tank.schema';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.KEY), MongooseModule.forFeature([{ name: "Tank", schema: TankSchema }])],
  controllers: [TankController],
  providers: [TankService],
})
export class AppModule {}
