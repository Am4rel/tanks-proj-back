import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Tank, TankDocument } from './tank.schema';

@Injectable()
export class TankService {
  constructor(@InjectModel("Tank") private tankModel: mongoose.Model<TankDocument>) {}

  async findAll(): Promise<Tank[]> {
    return await this.tankModel.find().exec();
  }

  async findOne(id: mongoose.Schema.Types.ObjectId): Promise<Tank> {
    return await this.tankModel.findById(id).exec();
  }
}