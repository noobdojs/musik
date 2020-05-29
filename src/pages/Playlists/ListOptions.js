import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ripple from 'react-native-material-ripple'

export default function ListOptions(){
  return (
    <View style={styles.container}>
      <Ripple rippleColor="#fff" rippleContainerBorderRadius={5}>
        <Text style={styles.optText}>Reproduzir</Text>
      </Ripple>
      <Ripple rippleColor="#fff" rippleContainerBorderRadius={5}>
        <Text style={styles.optText}>Reproduzir a próxima</Text>
      </Ripple>
      <Ripple rippleColor="#fff" rippleContainerBorderRadius={5}>
        <Text style={styles.optText}>Adicionar à fila de reprodução</Text>
      </Ripple>
      <Ripple rippleColor="#fff" rippleContainerBorderRadius={5}>
        <Text style={styles.optText}>Adicionar à lista</Text>
      </Ripple>
      <Ripple rippleColor="#fff" rippleContainerBorderRadius={5}>
        <Text style={styles.optText}>Renomear</Text>
      </Ripple>
      <Ripple rippleColor="#fff" rippleContainerBorderRadius={5}>
        <Text style={styles.optText}>Excluir</Text>
      </Ripple>
      <Ripple rippleColor="#fff" rippleContainerBorderRadius={5}>
        <Text style={styles.optText}>Salvar como arquivo</Text>
      </Ripple>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 3,
    paddingVertical: 5,
    backgroundColor: '#1D1D1D',
    borderRadius: 5
  },
  optText: {
    fontSize: 16,
    color: '#fff',
    padding: 5,
    marginVertical: 3,
  }
})
