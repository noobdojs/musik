import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import { MenuProvider } from 'react-native-popup-menu'

import Home from './src/pages/Home'
import Albuns from './src/pages/Albuns'
import Musicas from './src/pages/Musicas'
import Playlists from './src/pages/Playlists'
import Artistas from './src/pages/Artistas'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <MenuProvider>
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName

          if(route.name === 'Home'){
            iconName = 'home'
          }else if(route.name === 'Albuns'){
            iconName = 'disc'
          }else if(route.name === 'Musicas'){
            iconName = 'music' 
          }else if(route.name === 'Artistas'){
            iconName = 'user'
          }else if(route.name === 'Playlists'){
            iconName = 'list'
          }

          return <Feather name={iconName} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }} >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Musicas" component={Musicas} />
        <Tab.Screen name="Albuns" component={Albuns} />
        <Tab.Screen name="Artistas" component={Artistas} />
        <Tab.Screen name="Playlists" component={Playlists} />
      </Tab.Navigator>
    </NavigationContainer>
    </MenuProvider>
  )
}
