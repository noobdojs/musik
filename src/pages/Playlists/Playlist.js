import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'
import { Feather } from '@expo/vector-icons'

import ListOptions from './ListOptions'

export default function Playlist({title, icon}){
  const [isActive,setIsActive] = React.useState(false)
  const scaleValue = new Animated.Value(0)
  const opacityValue = new Animated.Value(0)

  React.useEffect(()=>{
    let scale = isActive ? 1 : 0
    let opacity = isActive ? 1 : 0
    Animated.sequence([
      Animated.timing(opacityValue, {
        toValue: opacity,
        duration: 200
      }),
      Animated.timing(scaleValue, {
        toValue: scale,
        duration: 300
      })
    ]).start()
  },[isActive])

  function toggleMenu(){
    setIsActive(!isActive)
  }

  return (
    <View style={styles.list}>
      <Feather name={icon} size={16} color="tomato" />
      <View style={styles.listInfo}>
        <Text style={styles.listTitle}>{title}</Text>
        <Text style={styles.listText}>10 músicas - 45:00</Text>
      </View>
      <TouchableOpacity style={styles.listOptions} onPress={toggleMenu}>
        <Feather name="chevron-down" size={16} />
      </TouchableOpacity>
      {/* <TouchableWithoutFeedback 
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
        onClick={() => setIsActive(false)}
      > */}

        <Animated.View
          style={{
            position: 'absolute',
            top: -10,
            right: 10,
            // width: 120,
            zIndex: 10,
            opacity: opacityValue,
            // transform: [{scale: scaleValue}],
            display: isActive ? 'flex' : 'none'
          }}
          >
          <ListOptions />
        </Animated.View>
      {/* </TouchableWithoutFeedback> */}
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
  listOptions: {
    backgroundColor: 'gray',
    width: 25,
    height: 25
  }
})
