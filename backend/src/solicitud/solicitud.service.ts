import { Injectable } from '@nestjs/common';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SolicitudService {
  constructor(private prisma:PrismaService){}
  create(dto: CreateSolicitudDto) {
    const item = this.prisma.solicitud.create({
      data:{
        car_brand: dto.car_brand,
        car_model: dto.car_model,
        color: dto.color,
        dni: dto.dni,
        price: dto.price,
        username: dto.username,
        year: dto.year,
      }
    })
    return item;
  }

  findAll() {
    const items = this.prisma.solicitud.findMany({
      orderBy:{
        id: 'asc'
      }
    })
    return items;
  }

  findOne(id: number) {
    return `This action returns a #${id} solicitud`;
  }

  update(id: number) {
    return `This action updates a #${id} solicitud`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitud`;
  }
}
