import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
    <Tabs 
        screenOptions={{
            headerTitleAlign: 'center',
        }}
    />
  )
}

export default TabLayout