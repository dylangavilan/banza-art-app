import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

const TabLayout = () => {
  return (
    <Tabs 
        screenOptions={{
            headerTitleAlign: 'center',
            tabBarActiveTintColor: '#4635B1',
            headerShown: false,
            animation: 'shift'

        }}
    >
      <Tabs.Screen 
        
          name="home" 
          options={{
              tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
              ),
          }} />
      <Tabs.Screen 
          name="favorites" 
          options={{
              tabBarIcon: ({ color, size }) => (
                  <Ionicons name="star" color={color} size={size} />
              ),
          }} />
    </Tabs>
  )
}

export default TabLayout