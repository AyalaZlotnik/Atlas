"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsedataService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const fs = require("fs");
let UsedataService = class UsedataService {
    constructor(configService) {
        this.configService = configService;
    }
    getData(searchParam) {
        return new Promise((resolve, reject) => {
            const filePath = this.configService.get('data.filePath');
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    return reject(err);
                }
                const jsonData = JSON.parse(data);
                if (searchParam) {
                    const filteredData = jsonData.filter((item) => item.title.includes(searchParam) ||
                        item.director.includes(searchParam) ||
                        item.writer.includes(searchParam) ||
                        item.actors.includes(searchParam) ||
                        item.plot.includes(searchParam) ||
                        item.awards.includes(searchParam));
                    resolve(filteredData);
                }
                else {
                    resolve(jsonData);
                }
            });
        });
    }
};
exports.UsedataService = UsedataService;
exports.UsedataService = UsedataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UsedataService);
//# sourceMappingURL=usedata.service.js.map