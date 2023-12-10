import { useRef } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './BackLink.styled';
import styled from 'styled-components';

const BtnLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const BackLink = () => {
  const location = useLocation();
  const backLink = useRef(location);

  return (
    <Button>
      <BtnLink to={backLink.current.state?.from ?? '/movies'}>
        <GoChevronLeft />
        <span>Go back</span>
      </BtnLink>
    </Button>
  );
};
