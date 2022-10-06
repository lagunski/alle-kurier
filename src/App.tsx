import React, { useState } from 'react';
import FilterBar from './components/FilterBar/FilterBar';
import CarrierCard from './components/CarrierCard/CarrierCard';
import styled from 'styled-components';
import useFetchCarriers from './hooks/useFetchCarriers';
import { Filters } from './interfaces/Filters';

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
  const { data = [] } = useFetchCarriers();
  const [filters, setFilters] = useState<Filters>();
  return (
    <Layout>
      <FilterBar filters={filters} setFilters={setFilters} />
      <Content>
        {data.map(carrier => (
          <CarrierCard {...carrier} key={carrier.id} />
        ))}
      </Content>
    </Layout>
  );
};

export default App;
