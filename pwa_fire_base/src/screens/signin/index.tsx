import React, { useState } from 'react'
import { View, Text, Image, StatusBar, Button } from 'react-native';
import { styles } from './styles'

import { ButtonIcon } from '../../components/buttonIcon';
import Illustration from '../../assets/illustration.png';

export function Signin() {
  return (
    <View style={ styles.container }>
      <StatusBar barStyle="light-content" backgroundColor='transparent' translucent/>

      <Image source={Illustration} style={ styles.image } resizeMode="stretch"/>

      <View style={ styles.content }>
        <Text style={ styles.title }>
          Organize {`\n`} 
          suas jogatinas {`\n`} 
          facilmente
        </Text>

        <Text style={ styles.subtitle }>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title='Entrar com Discord' activeOpacity={0.7}/>
      </View>
    </View>
  );
}
