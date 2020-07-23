import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

interface CardsAlbumProps{
  listTitle: string
}

const CardsAlbum: React.FC<CardsAlbumProps> = ({ listTitle }) => {
  let data = [
    {id: 1, artist: 'Blind Guardian', album: 'A Night In The Opera'},
    {id: 2, artist: 'Iron Mask', album: 'Black As Death'},
    {id: 3, artist: 'Misfits', album: 'American Psycho'},
    {id: 4, artist: 'Black Sabbath', album: 'Black Sabbath'},
    {id: 5, artist: 'Dio', album: 'Holy Diver'}
  ]

  return (
    <View style={styles.albumCards}>
      <Text style={styles.albunsTitle}>{listTitle}</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        >

          {data.map(item => (
            <View key={item.id} style={styles.card}>
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
          ))}
        </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
  albumCards: {
    width: '100%',
    marginBottom: 15,
    borderRadius: 10
  },
  albunsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 15
  },
  card: {
    width: Dimensions.get('window').width - 15,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 5,
    borderRadius: 10,
    paddingBottom: 5,
    backgroundColor: 'white'
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

export default CardsAlbum
