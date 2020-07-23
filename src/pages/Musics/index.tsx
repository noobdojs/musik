import React from 'react'
import { View, Text, ScrollView, SafeAreaView, TouchableHighlight } from 'react-native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import Music from './Music'

export default function Musics() {
  
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

          <Music />
          <Music />
          <Music />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}
