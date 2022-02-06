import styled from 'styled-components';

const StyledAppBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${properties => properties.theme.color};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export default StyledAppBar;
