import { Test, TestingModule } from '@nestjs/testing';
import { UsedataService } from './usedata.service';

describe('UsedataService', () => {
  let service: UsedataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsedataService],
    }).compile();

    service = module.get<UsedataService>(UsedataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
