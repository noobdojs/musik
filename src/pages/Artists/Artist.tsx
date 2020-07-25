import React from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native'
import Ripple from 'react-native-material-ripple'

export default function Artist(){
  const artista = "BLIND GUARDIAN".split('')
  
  return (
    <Ripple
      rippleColor="#fff"
      rippleOpacity={0.2}
      rippleDuration={400}
    >

    <ImageBackground source={{uri: "https://picsum.photos/120/120"}} style={styles.image}>
      <Text style={styles.artistTitle}>
        {artista}
      </Text>
    </ImageBackground>
    </Ripple>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  artistTitle: {
    fontSize: 18,
    flexWrap: 'wrap',
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '100%',
    textAlign: 'center',
    color: '#fff'
  }
})
