import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function Musica(){
  return (
    <TouchableHighlight 
      style={{borderRadius: 5, marginVertical: 5}}
      onPress={() => console.log('tapped')}
      underlayColor="gainsboro"
    >
      <View style={styles.musicContainer}>
        <Image source={{uri: "https://picsum.photos/40/40"}} style={styles.albumImage} />
        <View>
          <Text stlyle={styles.musicTitle}>Uma musica ai</Text>
          <Text style={styles.musicArtist}>um artista ai</Text>
        </View>
        <TouchableOpacity style={styles.btnOptions}>
          <Feather name="chevron-down" size={15}  />
        </TouchableOpacity>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  musicContainer: {
    padding: 3,
    // backgroundColor: '#fff',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginVertical: 5,
    position: 'relative'
  },
  albumImage: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 5
  },
  musicTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  btnOptions: {
    position: 'absolute',
    right: 0,
    padding: 10,
    borderRadius: 50
  }
})