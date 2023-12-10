import { NavLink, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import { Container, Header, List } from './Layout.styled';
import { GlobalStyle } from 'components/GlobalStyle';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: red;
  }
`;

export const AppLayout = () => {
  return (
    <Container>
      <Header>
        <List>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </li>
        </List>
      </Header>
      <main>
        <Outlet />
      </main>
      <Toaster />
      <GlobalStyle />
    </Container>
  );
};
