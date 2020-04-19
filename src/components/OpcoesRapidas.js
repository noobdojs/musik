import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function OpcoesRapidas({ iconName, iconColor, option }) {
  return (
    <TouchableOpacity style={styles.quickOption}>
      <AntDesign name={iconName} size={32} color={iconColor} />
      <Text style={styles.optionText}>{option}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  quickOption: {
    width: 60,
    height: 60,
    flex: 1,
    alignItems: 'center'
  },
  optionText: {
    fontSize: 12
  }
})
