import React from 'react'
import { TouchableOpacity, Text,View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function OpcoesRapidas({ iconName, iconColor, option }) {
  return (
    <TouchableOpacity style={styles.quickOption}>
      <View style={styles.optionIcon}>
        <Feather name={iconName} size={32} color={iconColor} />
      </View>
      <Text style={styles.optionText}>{option}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  quickOption: {
    width: 70,
    height: 70,
    flex: 1,
    alignItems: 'center'
  },
  optionIcon: {
    width: 60,
    height: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 100,
    backgroundColor: '#fff'
  },
  optionText: {
    fontSize: 12
  }
})
