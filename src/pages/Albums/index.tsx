import React from 'react'
import { ScrollView,View } from 'react-native'

import styles from './styles'

import CardAlbum from './CardAlbum'

export default function Albums(){
  return (
    <ScrollView>
      <View style={styles.container}>
        {[1,2,3,4,5,6].map((i) => <CardAlbum key={i} />)}
      </View>
    </ScrollView>
  )
}
