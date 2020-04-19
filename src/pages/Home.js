import React from 'react'
import { 
  ScrollView,SafeAreaView, View, Text, ImageBackground, FlatList
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { homeStyles } from './styles'
import OpcoesRapidas from '../components/OpcoesRapidas'
import CardArtista from '../components/CardArtista'

var data = [
  {id: 1,artist: 'Blind Guardian'},
  {id: 2, artist: 'Iron Mask'},
  {id: 3, artist: 'Marduk'},
  {id: 4, artist: 'Black Sabbath'}
]

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

        <View
          style={homeStyles.artistCards}
        >
          <Text style={homeStyles.artistsTitle}>Artistas principais</Text>
          <FlatList
            style={{marginTop: 15}}
            data={data}
            keyExtractor={artist => String(artist.id)}
            horizontal={true} 
            renderItem={({item: artist}) => <CardArtista artista={artist.artist} />}  
          />
        </View>

      </SafeAreaView>
    </ScrollView>
  )
}