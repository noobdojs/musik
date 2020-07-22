import React from 'react'
import { ScrollView, View, Text } from 'react-native'

import styles from './styles'
import Playlist from './Playlist'

export default function Playlists(){

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Suas Playlists</Text>
        <Playlist title="Favoritos" icon="heart" />
        <Playlist title="Favoritos" icon="heart" />
      </View>
    </ScrollView>
  )
}
