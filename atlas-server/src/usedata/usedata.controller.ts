import { Controller, Get, Query } from '@nestjs/common';
import { UsedataService } from './usedata.service';

@Controller('data')
export class UsedataController {
  constructor(private readonly usedataService: UsedataService) {}

  @Get()
  async getData(@Query('search') searchParam?: string): Promise<any> {
    return this.usedataService.getData(searchParam);
  }
}
