import React from 'react'
import {
  ScrollView,SafeAreaView, View, Text, ImageBackground
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { homeStyles } from './styles'
import OpcoesRapidas from '../components/OpcoesRapidas'
import CardsArtista from '../components/CardsArtista'
import CardsAlbum from '../components/CardsAlbum'

export default function Home(){
  return (
    <ScrollView>
      <SafeAreaView style={homeStyles.container}>
        <ImageBackground source={require('../assets/bg_card.jpg')} style={homeStyles.bgCard}>
          <View style={homeStyles.cardContainer}>
            <View style={homeStyles.cardAvatar}>
              <AntDesign name="user" size={32} color="green" />
            </View>
            <Text style={homeStyles.cardTitle}>Bem-vindo(a) user</Text>
          </View>
        </ImageBackground>

        <View style={homeStyles.quickOptions}>
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
