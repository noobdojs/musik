import React from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'

export default function CardsArtista({ tipoLista }){
  let data = [
    {id: 1, artist: 'Blind Guardian'},
    {id: 2, artist: 'Iron Mask'},
    {id: 3, artist: 'Marduk'},
    {id: 4, artist: 'Black Sabbath'},
    {id: 5, artist: 'Dio'}
  ]

  return (
    <View style={styles.artistCards}>
      <Text style={styles.artistsTitle}>Artistas {tipoLista}</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={artist => String(artist.id)}
        horizontal={true}
        renderItem={({item: artist}) => {
          return (
            <View style={styles.card}>
              <Image source={{uri: "https://picsum.photos/100/150"}} style={styles.image} />
              <Text style={styles.title}>{artist.artist}</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  artistCards: {
    width: '100%',
    marginBottom: 5
  },
  artistsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5
  },
  card: {
    width: 120,
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingBottom: 5
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
