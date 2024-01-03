import { Module } from '@nestjs/common';
import { SolicitudService } from './solicitud.service';
import { SolicitudController } from './solicitud.controller';

@Module({
  controllers: [SolicitudController],
  providers: [SolicitudService]
})
export class SolicitudModule {}
