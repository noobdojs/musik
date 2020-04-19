import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function CardArtista({ artista }){
  return (
    <View styles={styles.card}>
      <Image source={{uri: "https://picsum.photos/100/150"}} style={{width: '100%',height: '100%'}} />
      <Text>{artista}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 120,
    width: 80,
    marginRight: 5
  }
})
