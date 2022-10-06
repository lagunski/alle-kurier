export interface Carrier {
  id: number;
  name: string;
  color: string;
  price: number;
  maxWeight: number;
  maxWidth: number;
  maxHeight: number;
  maxLength: number;
  toPointDelivery: boolean;
  toDoorDelivery: boolean;
  fromPointShipment: boolean;
  fromDoorShipment: boolean;
}
