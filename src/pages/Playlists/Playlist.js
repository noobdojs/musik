import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { Feather } from '@expo/vector-icons'

import ListOptions from './ListOptions'

export default function Playlist({title, icon}){
  let isActive = false
  let scaleValue = new Animated.Value(0)

  function toggleOptions(){
    isActive = isActive ? false : true
    let scale = isActive ? 1 : 0
    Animated.timing(scaleValue, {
      toValue: scale,
      duration: 300
    }).start()
  }

  return (
    <View style={styles.list}>
      <Feather name={icon} size={16} color="tomato" />
      <View style={styles.listInfo}>
        <Text style={styles.listTitle}>{title}</Text>
        <Text style={styles.listText}>10 músicas - 45:00</Text>
      </View>
      <TouchableOpacity style={styles.listOptions} onPress={toggleOptions}>
        <Feather name="chevron-down" size={15} />
      </TouchableOpacity>
      <Animated.View 
        style={[styles.optionContainer,{ transform: [{scaleY: scaleValue}]}]}>
        <ListOptions />
      </Animated.View>
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
  },
  optionContainer: {
    position: 'absolute',
    right: 2,
    left: 2,
    borderRadius: 3
  }
})