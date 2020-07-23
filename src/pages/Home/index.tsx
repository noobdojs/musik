import React from 'react'
import {
  ScrollView,SafeAreaView, View, Text, ImageBackground
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles'
import QuickOptions from './QuickOptions'
import CardsArtist from './CardsArtist'
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
          <QuickOptions backgroundColor="#cee9fc" iconName="clock" iconColor="#66aee7" option="Histórico" />
          <QuickOptions backgroundColor="#fcd5d5" iconName="plus-circle" iconColor="#f46758" option="Mais recentes" />
          <QuickOptions backgroundColor="#e0d1f1" iconName="activity" iconColor="#8562c7" option="Mais tocadas" />
          <QuickOptions backgroundColor="#d8ebd8" iconName="shuffle" iconColor="#79b97a" option="Aleatório" />
        </View>

        <CardsArtist listTitle="Principais artistas" />
        <CardsAlbum listTitle="Melhores albuns"/>
        <CardsArtist listTitle="Artistas recentes" />
        <CardsAlbum listTitle="Albuns recentes"/>

      </SafeAreaView>
    </ScrollView>
  )
}
