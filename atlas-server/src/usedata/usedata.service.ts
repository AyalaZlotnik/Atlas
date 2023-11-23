import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';

@Injectable()
export class UsedataService {
  constructor(private readonly configService: ConfigService) {}

  getData(searchParam?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const filePath = this.configService.get<string>('data.filePath');

      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          return reject(err);
        }
        const jsonData = JSON.parse(data);
        if (searchParam) {
          const filteredData = jsonData.filter(
            (item) =>
              item.title.includes(searchParam) ||
              item.director.includes(searchParam) ||
              item.writer.includes(searchParam) ||
              item.actors.includes(searchParam) ||
              item.plot.includes(searchParam) ||
              item.awards.includes(searchParam),
          );
          resolve(filteredData);
        } else {
          resolve(jsonData);
        }
      });
    });
  }
}
