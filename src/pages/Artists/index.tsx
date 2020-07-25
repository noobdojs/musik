import React, {useState} from 'react'
import { ScrollView,View } from 'react-native'
import * as MediaLibrary from 'expo-media-library'
import mm from 'music-metadata'

import styles from './styles'
import Artist from './Artist'

async function getArtists(){
  const artists = await MediaLibrary.getAssetsAsync({
    sortBy: 'default',
    mediaType: 'audio'
  })
  mm.parseFile(artists.assets[1].uri)
    .then(res => console.log(res))
}

function Artists(){
  //const [artists,setArtists] = useState({})
  
  getArtists()
  return (
    <ScrollView>
      <View style={styles.container}>
        {[1,2,3,4].map(i => <Artist key={i} />)}
      </View>
    </ScrollView>
  )
}

export default Artists
