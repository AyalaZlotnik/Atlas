import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200',
  });
  await app
    .listen(3000)
    .then(() => console.log('listen to port 3000'))
    .catch((err) => console.log(err));
}
bootstrap();
