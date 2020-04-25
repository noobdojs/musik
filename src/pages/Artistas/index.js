import React from 'react'
import { ScrollView,View } from 'react-native'

import styles from './styles'
import Artista from './Artista'

export default function Artistas(){
  return (
    <ScrollView>
      <View style={styles.container}>
        <Artista />
        <Artista />
        <Artista />
        <Artista />
      </View>
    </ScrollView>
  )
}
