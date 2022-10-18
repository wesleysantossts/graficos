import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

export const ContainerLayout = styled(Container)`
  
`;

export const RowLayout = styled(Row)`

  @media (max-width: ${props => props.theme.width.xl}) {}
  @media (max-width: ${props => props.theme.width.lg}) {}
  @media (max-width: ${props => props.theme.width.md}) {}
  @media (max-width: ${props => props.theme.width.sm}) {}
`;

export const ColLayout = styled(Col)`

  @media (max-width: ${props => props.theme.width.xl}) {}
  @media (max-width: ${props => props.theme.width.lg}) {}
  @media (max-width: ${props => props.theme.width.md}) {}
  @media (max-width: ${props => props.theme.width.sm}) {}
`;