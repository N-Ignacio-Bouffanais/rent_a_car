export interface Inscription {
  username: string;
  dni: string;
  car_model: string;
  price: number;
  car_brand:
    | "Chevrolet"
    | "Volkswagen"
    | "Hyundai"
    | "Toyota"
    | "Kia"
    | "Ford"
    | "MAZDA"
    | "Kia"
    | "RENAULT";
  year: number;
  color: string;
}