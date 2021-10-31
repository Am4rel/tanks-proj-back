import { Controller, Get, Param } from '@nestjs/common';
import {Schema} from 'mongoose'

import { TankService } from './tank.service';
import { Tank } from './tank.schema';

@Controller("/tanks")
export class TankController {
  constructor(private readonly tankService: TankService) {}

  @Get('/:id')
  async findOne(@Param('id') id: Schema.Types.ObjectId): Promise<Tank> {
    return await this.tankService.findOne(id);
  }
  
  @Get()
  async findAll(): Promise<Tank[]> {
    return await this.tankService.findAll();
  }
}
