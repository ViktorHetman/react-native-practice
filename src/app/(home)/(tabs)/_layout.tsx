import type { FC } from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons'
import Entypo from '@expo/vector-icons/Entypo'

const TabsNavigator: FC = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Chats',
          tabBarIcon: ({ size, color }) => (
            <Entypo name='chat' size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name='user-alt' size={size} color={color} />
          )
        }}
      />
    </Tabs>
  )
}

export default TabsNavigator
