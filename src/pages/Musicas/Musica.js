import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function Musica(){
  return (
    <View style={styles.musicContainer}>
      <Image source={{uri: "https://picsum.photos/40/40"}} style={styles.albumImage} />
      <View>
        <Text stlyle={styles.musicTitle}>Uma musica ai</Text>
        <Text style={styles.musicArtist}>um artista ai</Text>
      </View>
      <TouchableOpacity style={{position: 'absolute', right: 0,  padding: 10, borderRadius: 50}}>
        <AntDesign name="down" size={15}  />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  musicContainer: {
    width: '100%',
    padding: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
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
    fontWeight: 'bold',
    
  }
})