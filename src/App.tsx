import React from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import CourierCard from './components/CourierCard/CourierCard';
import { Courier } from './interfaces/Courier';
import styled from 'styled-components';

const data: Array<Courier> = [
  {
    id: 1,
    name: 'DPD',
    color: '#d3002d',
    price: 9.99,
    maxWeight: 15,
    maxWidth: 75,
    maxHeight: 45,
    maxLength: 32,
    toPointDelivery: true,
    toDoorDelivery: true,
    fromPointShipment: true,
    fromDoorShipment: true,
  },
  {
    id: 2,
    name: 'InPost Paczkomaty',
    color: '#f3ca09',
    price: 7.99,
    maxWeight: 12,
    maxWidth: 60,
    maxHeight: 30,
    maxLength: 30,
    toPointDelivery: true,
    toDoorDelivery: false,
    fromPointShipment: true,
    fromDoorShipment: false,
  },
  {
    id: 3,
    name: 'DHL',
    color: '#f4c200',
    price: 9.99,
    maxWeight: 14,
    maxWidth: 75,
    maxHeight: 50,
    maxLength: 35,
    toPointDelivery: true,
    toDoorDelivery: true,
    fromPointShipment: false,
    fromDoorShipment: true,
  },
  {
    id: 4,
    name: 'UPS',
    color: '#441815',
    price: 10.99,
    maxWeight: 16,
    maxWidth: 55,
    maxHeight: 40,
    maxLength: 30,
    toPointDelivery: true,
    toDoorDelivery: true,
    fromPointShipment: true,
    fromDoorShipment: true,
  },
  {
    id: 5,
    name: 'GLS',
    color: '#0518a8',
    price: 9.95,
    maxWeight: 16,
    maxWidth: 55,
    maxHeight: 50,
    maxLength: 35,
    toPointDelivery: false,
    toDoorDelivery: true,
    fromPointShipment: true,
    fromDoorShipment: true,
  },
  {
    id: 6,
    name: 'FedEx',
    color: '#442c8b',
    price: 10.95,
    maxWeight: 13,
    maxWidth: 65,
    maxHeight: 45,
    maxLength: 35,
    toPointDelivery: false,
    toDoorDelivery: true,
    fromPointShipment: false,
    fromDoorShipment: true,
  },
];

export const Layout = styled.div`
  width: 67rem;
  margin: 0 auto;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.4rem;
`;

const App = () => {
  return (
    <Layout>
      <FilterBar />
      <Content>
        {data.map(carrier => (
          <CourierCard color={carrier.color} name={carrier.name} price={carrier.price} key={carrier.id} />
        ))}
      </Content>
    </Layout>
  );
};

export default App;
