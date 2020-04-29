import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ListOptions(){
  return (
    <View style={styles.container}>
      <Text style={styles.optText}>Reproduzir</Text>
      <Text style={styles.optText}>Reproduzir a próxima</Text>
      <Text style={styles.optText}>Adicionar à fila de reprodução</Text>
      <Text style={styles.optText}>Adicionar à lista</Text>
      <Text style={styles.optText}>Renomear</Text>
      <Text style={styles.optText}>Excluir</Text>
      <Text style={styles.optText}>Salvar como arquivo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 3,
    paddingVertical: 5,
    backgroundColor: 'grey',
    borderRadius: 3
  },
  optText: {
    fontSize: 16,
    color: '#fff'
  }
})