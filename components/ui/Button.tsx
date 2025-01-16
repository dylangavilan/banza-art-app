import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'

const Button = ({ children }: PressableProps) => {
  return (
    <Pressable>
        {children}
    </Pressable>
  )
}

export default Button