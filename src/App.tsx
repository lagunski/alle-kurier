import React, { FC, useState } from 'react';
import CarrierCard from './components/CarrierCard/CarrierCard';
import styled from 'styled-components';
import { Filters } from './interfaces/Filters';
import { Spinner } from './components/Spinner/Spinner';
import { ToastContainer } from 'react-toastify';
import { useFetchCarriers } from './hooks/useFetchCarriers';
import { FilterBar } from './components/FilterBar/FilterBar';

export const Layout = styled.div`
  width: 67rem;
  margin: 0 auto;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.4rem;
`;

const NoItems = styled.div`
  display: flex;
  margin: 2.4rem;
  justify-content: center;
  font-weight: 500;
`;

export const App: FC = () => {
  const initialState = {
    maxWeight: 0,
    maxWidth: 0,
    maxHeight: 0,
    maxLength: 0,
    toPointDelivery: false,
    toDoorDelivery: false,
    fromPointShipment: false,
    fromDoorShipment: false,
  };
  const [filters, setFilters] = useState<Filters>(initialState);
  const { data = [], isLoading, isError } = useFetchCarriers(filters);
  return (
    <Layout>
      <FilterBar filters={filters} setFilters={setFilters} />
      {data.length === 0 && !isLoading && !isError ? (
        <NoItems>No carriers for this parameters</NoItems>
      ) : (
        <Content>
          {data.map(carrier => (
            <CarrierCard {...carrier} key={carrier.id} />
          ))}
        </Content>
      )}
      {isLoading && <Spinner />}
      <ToastContainer autoClose={5000} />
    </Layout>
  );
};
