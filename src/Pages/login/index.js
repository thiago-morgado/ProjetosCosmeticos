import React from 'react';
import {Button} from 'react-native';
import {Container, Texto} from './styles';

function HomeScreen({navigation}) {
  return (
    <Container>
      <Texto>Home screen</Texto>
      <Button
        title="Voltar para tela home"
        onPress={() => navigation.navigate('home')}
      />
    </Container>
  );
}

export default HomeScreen;
