import React from 'react';
import { ContainerLayout } from './style';

type DefaultLayoutProps = {
  fluid?: boolean
  children: any
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  return (
    <ContainerLayout fluid={props.fluid}>
      {props.children}
    </ContainerLayout>
  )
};

export default DefaultLayout;