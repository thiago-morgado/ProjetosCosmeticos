import React from 'react';
import {Button} from 'react-native';
import {Container, Texto, Corpo, Topo, Div} from './styles';

function HomeScreen({navigation}) {
  return (
    <Container>
      <Corpo>
        <Topo>
          <Div>
            <Texto>Loja</Texto>
          </Div>

          <Button
            title="Fazer login"
            onPress={() => navigation.navigate('login')}
          />
        </Topo>
      </Corpo>
    </Container>
  );
}

export default HomeScreen;
