import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { ContextMenu } from '../../components'

interface PlaylistProps{
  icon: string
  title: string
}

const Playlist: React.FC<PlaylistProps> = ({title, icon}) => {
  const menuOptions = [
    'Reproduzir',
    'Excluir',
    'Adicionar à fila'
  ]
  function handlePress(){
    Alert.alert("Pressionou")
  }

  return (
    <View style={styles.list}>
      <Feather name={icon} size={16} color="tomato" />
      <View style={styles.listInfo}>
        <Text style={styles.listTitle}>{title}</Text>
        <Text>10 músicas - 45:00</Text>
      </View>
      <ContextMenu  handlePress={handlePress} options={menuOptions} />  
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    padding: 3,
    marginHorizontal: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  listInfo: {
    flex: 1,
    alignSelf: 'flex-start',
    marginLeft: 15
  },
  listTitle: {
    fontSize: 18
  }
})

export default Playlist
