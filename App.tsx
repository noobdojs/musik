import React, {useEffect, useState} from 'react'
//import {View, Text, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { MenuProvider } from 'react-native-popup-menu'
import * as MediaLibrary from 'expo-media-library'

import {Home,Albums,Artists,Playlists,Musics} from './src/pages'

const Tab = createBottomTabNavigator()

export default function App() {
  const [isGranted, setIsGranted] = useState(false)

  useEffect(() => {
    async function reqPermission(){
      const permissionStatus = await MediaLibrary.getPermissionsAsync()
      setIsGranted(permissionStatus.granted)
    }
    reqPermission()
  }, [isGranted])

  async function RequestPermissions(){
    const permissionStatus = await MediaLibrary.requestPermissionsAsync()
    setIsGranted(permissionStatus.granted)
  }

  if(!isGranted){
    RequestPermissions()
    /*return (
      <View>
        <Text>
          Você precisa autorizar o acesso ao biblioteca de mídia
        </Text>
        <TouchableOpacity onPress={RequestPermissions}>
          <Text>Permitir</Text>
        </TouchableOpacity>
      </View>
    )*/
  }

  return (
    <MenuProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({route}) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string = route.name === 'Home' ? 'home'
              : route.name === 'Albums' ? 'disc'
              : route.name === 'Musics' ? 'music'
              : route.name === 'Artists' ? 'user'
              : route.name === 'Playlists' ? 'list'
              : '' 

            return <Feather name={iconName} size={size} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Musics" component={Musics} />
          <Tab.Screen name="Albums" component={Albums} />
          <Tab.Screen name="Artists" component={Artists} />
          <Tab.Screen name="Playlists" component={Playlists} />
        </Tab.Navigator>
      </NavigationContainer>
    </MenuProvider>
  )
}
