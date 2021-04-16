import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import * as MediaLibrary from 'expo-media-library'
import mm from 'music-metadata'

import styles from './styles'
import Music from './Music'

export default function Musics() {
  const [isPermissionGranted, setIsPermissionGranted] = useState(false)
  const [mediaAssets, setMediaAssets] = useState<MediaLibrary.Asset[]>([])

  async function getPermissionStatus(){
    const permissionStatus = await MediaLibrary.getPermissionsAsync()
    setIsPermissionGranted(permissionStatus.granted)
  }

  async function requestPermission(){
    const permissionStatus = await MediaLibrary.requestPermissionsAsync()
    setIsPermissionGranted(permissionStatus.granted)
  }

  async function getAllMusics(){
    const musics = await MediaLibrary.getAssetsAsync({
      mediaType: 'audio',
      first: 100,
    })

    setMediaAssets(musics.assets)
  }

  useEffect(() => {
    getPermissionStatus()
    if(isPermissionGranted){
      getAllMusics()
      mm.parseFile(mediaAssets[0].uri)
        .then(metadata => console.log(metadata))
        .catch(err => console.log(err))
    }
  },[])

  if(!isPermissionGranted){
    return (
      <View style={styles.permissionRequest}>
        <Text style={styles.permissionTitle}>Você precisa permitir acesso ao armazenamento de mídia.</Text>
        <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
          <Text style={styles.permissionButtonText}>Permitir</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonsWrapper}>
          <TouchableHighlight
            onPress={() => true}
            style={{borderRadius: 50}}
            underlayColor="darkgray"
          >
            <View style={styles.button}>
              <Feather name="play" size={20} color="#fff" />
              <Text style={styles.buttonText}>Reproduzir tudo</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => true}
            style={{borderRadius: 50}}
            underlayColor="#fff"
          >
            <View style={styles.button}>
              <Feather name="shuffle" size={20} color="#fff" />
              <Text style={styles.buttonText}>Aleatório</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{marginTop: 5, width: '100%'}}>
          {mediaAssets.map((mAsset) =>
            <Music key={mAsset.id}
              filename={mAsset.filename}
              duration={mAsset.duration}
            />
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}
