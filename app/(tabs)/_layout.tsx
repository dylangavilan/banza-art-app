import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

const TabLayout = () => {
  return (
    <Tabs 
        screenOptions={{
            headerTitleAlign: 'center',
            tabBarActiveTintColor: 'tomato',
            headerShown: false,
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