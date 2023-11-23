import { UsedataService } from './usedata.service';
export declare class UsedataController {
    private readonly usedataService;
    constructor(usedataService: UsedataService);
    getData(searchParam?: string): Promise<any>;
}
