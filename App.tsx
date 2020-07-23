import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { MenuProvider } from 'react-native-popup-menu'

import {Home,Albums,Artists,Playlists,Musics} from './src/pages'

const Tab = createBottomTabNavigator()

export default function App() {
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
