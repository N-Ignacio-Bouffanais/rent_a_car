import { Inscription } from "interfaces/car";
import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// export const postItem = async (inscription:Inscription, res: Response) => {
//   const response = await prisma.inscription.create({
//     data:{
//       car_brand:inscription.car_brand,
//       car_model:inscription.car_model,
//       color:inscription.color,
//       dni:inscription.dni,
//       price:inscription.price,
//       username:inscription.username,
//       year:inscription.year
//     }
//   })
//   return response
// };
export const postItem = async (
  inscription: Inscription,
  res: Response,
  next: NextFunction
) => {
  const item = await prisma.inscription.create({
    data: {
      car_brand: inscription.car_brand,
      car_model: inscription.car_model,
      color: inscription.color,
      dni: inscription.dni,
      price: inscription.price,
      username: inscription.username,
      year: inscription.year,
    },
  });
  return item;
};

export const getItem = async () => {};
