import React from 'react'
import { View, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Opcoes(){
  return (
    <View>
      <MaterialCommunityIcons name="menu" size={32} />
      <TextInput 
        placeholder="Pesquisar em sua biblioteca..."
        autoCorrect={false}
        onChange={(e) => console.log(e.value)}
      />
    </View>
  )
}