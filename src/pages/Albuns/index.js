import React from 'react'
import { ScrollView,View } from 'react-native'

import styles from './styles'

import CardAlbum from './CardAlbum'

export default function Albuns(){
  return (
    <ScrollView>
      <View style={styles.container}>
        <CardAlbum />
        <CardAlbum />
        <CardAlbum />
        <CardAlbum />
        <CardAlbum />
        <CardAlbum />
      </View>
    </ScrollView>
  )
}