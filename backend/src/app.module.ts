import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SolicitudModule } from './solicitud/solicitud.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client/dist'),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    SolicitudModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
