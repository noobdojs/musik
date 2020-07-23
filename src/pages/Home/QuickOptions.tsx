import React from 'react'
import { TouchableOpacity, Text,View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

interface QuickOptionsProps {
  iconName: string
  iconColor: string
  backgroundColor: string
  option: string
}

const QuickOptions: React.FC<QuickOptionsProps> = ({ iconName, iconColor, option, backgroundColor }) => {
  return (
    <TouchableOpacity style={styles.quickOption}>
    <View style={[styles.optionIcon, {backgroundColor}]}>
        <Feather name={iconName} size={30} color={iconColor} />
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
    alignItems: 'center',
  },
  optionIcon: {
    width: 60,
    height: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 35
  },
  optionText: {
    fontSize: 12,
    color: '#6a6a6a'
  }
})

export default QuickOptions
