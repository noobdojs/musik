import React from 'react'
import { ScrollView,View } from 'react-native'

import styles from './styles'
import Artist from './Artist'

export default function Artists(){
  return (
    <ScrollView>
      <View style={styles.container}>
        {[1,2,3,4].map(i => <Artist key={i} />)}
      </View>
    </ScrollView>
  )
}
