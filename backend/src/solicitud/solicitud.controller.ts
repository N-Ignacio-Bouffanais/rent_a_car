import { Controller, Get, Post, Body, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { SolicitudService } from './solicitud.service';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';

@Controller('api')
export class SolicitudController {
  constructor(private readonly solicitudService: SolicitudService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  create(@Body() dto: CreateSolicitudDto) {
    return this.solicitudService.create(dto);
  }

  @Get()
  findAll() {
    return this.solicitudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitudService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string) {
  //   return this.solicitudService.update(+id, updateSolicitudDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitudService.remove(+id);
  }
}
