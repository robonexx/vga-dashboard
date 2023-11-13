import { FC } from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  grid-area: dashboard;
  position: relative;
  width: fit-content;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 2.875rem;
  grid-template-areas:
    'product-card product-card product-card product-card product-card product-card dashboard-sidebar dashboard-sidebar dashboard-sidebar'
    'gaming-gear gaming-gear gaming-gear recently-played recently-played recently-played dashboard-sidebar dashboard-sidebar dashboard-sidebar'
    'gaming-gear gaming-gear gaming-gear recently-played recently-played recently-played dashboard-sidebar dashboard-sidebar dashboard-sidebar';
`;

const ProductCard = styled.div`
  max-height: 20rem;
  grid-area: product-card;
  /* grid-column: span 6; */
  background-color: #f0f0f0;
`;

const GamingGear = styled.div`
  width: 26rem;
  min-width: 25rem;
  max-height: 26.25rem;
  grid-area: gaming-gear;
  /*  grid-column: span 3; */
  background-color: #e0e0e0;
`;

const RecentlyPlayed = styled.div`
  min-width: 25rem;
  max-height: 26.25rem;
  grid-area: recently-played;
  /*   grid-column: span 3; */
  background-color: #d0d0d0;
`;

const DashboardSidebar = styled.div`
  padding: 2.875rem;
  width: 20rem;
  width: 100%;
  grid-area: dashboard-sidebar;
  grid-column: span 3;
  background-color: #c0c0c0;
  max-height: 51.25rem;
`;

const Dashboard: FC = () => {
  return (
    <DashboardContainer>
      <ProductCard>
        {/* Content for the Product Card */}
        <h2>Product Card</h2>
      </ProductCard>
      <GamingGear>
        {/* Content for the Gaming Gear Card */}
        <h2>Gaming Gear</h2>
      </GamingGear>
      <RecentlyPlayed>
        {/* Content for the Recently Played Card */}
        <h2>Recently Played</h2>
      </RecentlyPlayed>
      <DashboardSidebar>
        {/* Content for the Sidebar */}
        <h2>Sidebar</h2>
      </DashboardSidebar>
    </DashboardContainer>
  );
};

export default Dashboard;
