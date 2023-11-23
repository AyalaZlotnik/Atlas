import { ConfigService } from '@nestjs/config';
export declare class UsedataService {
    private readonly configService;
    constructor(configService: ConfigService);
    getData(searchParam?: string): Promise<any>;
}
