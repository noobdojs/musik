import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function CardsAlbum({ tipoLista }){
  let data = [
    {id: 1, artist: 'Blind Guardian', album: 'A Night In The Opera'},
    {id: 2, artist: 'Iron Mask', album: 'Black As Death'},
    {id: 3, artist: 'Misfits', album: 'American Psycho'},
    {id: 4, artist: 'Black Sabbath', album: 'Black Sabbath'},
    {id: 5, artist: 'Dio', album: 'Holy Diver'}
  ]

  return (
    <View style={styles.albumCards}>
      <Text style={styles.albunsTitle}>{tipoLista} albuns</Text>


        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
          horizontal={true}
          data={data}
          keyExtractor={item => String(item.id)}
          paginEnabled={true}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <ImageBackground source={{uri: "https://picsum.photos/150/80"}} style={styles.image}>
                  <TouchableOpacity style={styles.playButton}>
                    <FontAwesome5 name="play" size={20} color="#fff" />
                  </TouchableOpacity>
                </ImageBackground>

                <View style={styles.albumInfo}>
                  <Text style={styles.albumArtist}>{item.artist}</Text>
                  <Text style={styles.albumTitle}>{item.album}</Text>
                </View>
              </View>
            )
          }}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
  albumCards: {
    width: '100%',
    marginBottom: 5
  },
  albunsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    width: '500%'
  },
  card: {
    width: 300,
    // display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 5,
    borderRadius: 10,
    paddingBottom: 5
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    position: "relative"
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#00000059',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 5,
    bottom: 2
  },
  albumInfo: {
    width: '100%',
    padding: 5,
  },
  albumArtist: {
    fontSize: 16,
  },
  albumTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
