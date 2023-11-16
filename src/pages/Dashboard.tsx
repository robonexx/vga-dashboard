import { FC } from 'react';
import styled from 'styled-components';

import FeaturedProductCard from '../components/featured-product-card/FeaturedProductCard';
import ProductCard from '../components/product-card/ProductCard';
import RecentlyPlayed from '../components/recently-played/RecentlyPlayed';

const DashboardContainer = styled.div`
  grid-area: dashboard;
  position: relative;
  width: fit-content;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2.875rem;
  grid-template-areas:
    'product-card product-card product-card product-card product-card product-card dashboard-sidebar dashboard-sidebar dashboard-sidebar'
    'gaming-gear gaming-gear gaming-gear recently-played recently-played recently-played dashboard-sidebar dashboard-sidebar dashboard-sidebar'
    'gaming-gear gaming-gear gaming-gear recently-played recently-played recently-played dashboard-sidebar dashboard-sidebar dashboard-sidebar';
`;

const Featured = styled.div`
  max-height: 20rem;
  grid-area: product-card;
  background-color: transparent;
`;

const Products = styled.div`
  min-width: 25rem;
  width: 100%;
  max-height: 26.25rem;
  grid-area: gaming-gear;
  background-color: transparent;
`;

const RecentlyPlayedContainer = styled.div`
  min-width: 25rem;
  width: 100%;
  max-height: 26.25rem;
  grid-area: recently-played;
  background-color: transparent;
`;

const DashboardSidebar = styled.div`
  padding: 2.875rem;
  min-width: 20rem;
  width: 100%;
  grid-area: dashboard-sidebar;
  grid-column: span 3;
  background-color: #c0c0c0;
  max-height: 51.25rem;
`;

const Dashboard: FC = () => {
  return (
    <DashboardContainer>
      <Featured>
        <FeaturedProductCard />
      </Featured>
      <Products>
        <ProductCard />
      </Products>
      <RecentlyPlayedContainer>
        <RecentlyPlayed />
      </RecentlyPlayedContainer>
      <DashboardSidebar>
        {/* Content for the Sidebar */}
        <h2>Sidebar</h2>
      </DashboardSidebar>
    </DashboardContainer>
  );
};

export default Dashboard;
