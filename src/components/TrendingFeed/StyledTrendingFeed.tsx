import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledListNoorder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 1.5em;
  padding: 0.6em;
  background: #fefefe8c;
  color: #231f20;
  width: 350px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  color: inherit;

  &:hover {
    color: #005eaa;
  }
`;

export const StyledFeedInfo = styled.div`
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`;
