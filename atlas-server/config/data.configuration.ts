import { registerAs } from '@nestjs/config';

export default registerAs('data', () => ({
  filePath: 'config/data.json',
}));
