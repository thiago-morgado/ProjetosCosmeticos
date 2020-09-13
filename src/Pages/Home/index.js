import React from 'react';

import {Container, Header, Texto, Slide, Image} from './styles';

export default function index() {
  return (
    <Container>
      <Header>
        <Texto>Tela Produtos</Texto>
      </Header>
      <Slide>
        <Image source={require('../../assests/images/imagens-01.png')} />
      </Slide>
    </Container>
  );
}
