import React from 'react'
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles'
import Musica from './Musica'

export default function Musicas() {
  
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="play" size={20} color="#fff" />
            <Text style={styles.buttonText}>Reproduzir tudo</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={styles.button}>
            <AntDesign name="swap" size={20} color="#fff" />
            <Text style={styles.buttonText}>Aleatório</Text>
          </TouchableOpacity>
        </View>
        <Musica />
        <Musica />
        <Musica />
      </SafeAreaView>
    </ScrollView>
  )
}