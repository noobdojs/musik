import React from 'react'
import {
  ScrollView,SafeAreaView, View, Text, ImageBackground
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles'
import OpcoesRapidas from './OpcoesRapidas'
import CardsArtista from './CardsArtista'
import CardsAlbum from './CardsAlbum'

export default function Home(){
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/bg_card.jpg')} style={styles.bgCard}>
          <View style={styles.cardContainer}>
            <View style={styles.cardAvatar}>
              <AntDesign name="user" size={32} color="green" />
            </View>
            <Text style={styles.cardTitle}>Bem-vindo(a) user</Text>
          </View>
        </ImageBackground>

        <View style={styles.quickOptions}>
          <OpcoesRapidas iconName="clockcircleo" iconColor="blue" option="Histórico" />
          <OpcoesRapidas iconName="pluscircleo" iconColor="red" option="Mais recentes" />
          <OpcoesRapidas iconName="linechart" iconColor="purple" option="Mais tocadas" />
          <OpcoesRapidas iconName="swap" iconColor="green" option="Aleatório" />
        </View>

        <CardsArtista tipoLista="Principais" />
        <CardsAlbum tipoLista="Melhores"/>
        <CardsArtista tipoLista="Recentes" />
        <CardsAlbum tipoLista="Recentes"/>

      </SafeAreaView>
    </ScrollView>
  )
}
