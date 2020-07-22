import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu'

//import ListOptions from './ListOptions'

export default function Playlist({title, icon}){

  return (
    <View style={styles.list}>
      <Feather name={icon} size={16} color="tomato" />
      <View style={styles.listInfo}>
        <Text style={styles.listTitle}>{title}</Text>
        <Text style={styles.listText}>10 músicas - 45:00</Text>
      </View>
      <Menu>
        <MenuTrigger
          style={styles.listOptions}
          children={<Feather name="chevron-down" size={18} />}
        />
        <MenuOptions>
          <MenuOption onSelect={() => alert('Save')} text="aaa" />
          <MenuOption onSelect={() => alert('Save')} text="aaa" />
          <MenuOption onSelect={() => alert('Save')} text="aaa" />
          <MenuOption onSelect={() => alert('Save')} text="aaa" />
          <MenuOption onSelect={() => alert('Save')} text="aaa" />
          <MenuOption onSelect={() => alert('Save')} text="aaa" />
        </MenuOptions>
      </Menu>
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
