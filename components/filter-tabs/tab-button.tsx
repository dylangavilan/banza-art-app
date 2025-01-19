import { View, Text, Pressable, PressableProps, StyleSheet } from 'react-native'
import React from 'react'

interface Props extends PressableProps {
  children: string
  selected: boolean
  
}

const TabButton = ({ children, selected, ...props }: Props) => {
  const variantStyles =  selected ? styles.selected : styles.default 

  return (
    <Pressable  style={[styles.button, variantStyles]}
    {...props}>
      <Text>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({ 
  button: {
    paddingHorizontal:16,
    paddingVertical: 8,
    backgroundColor: 'violet',
    borderRadius: 20, 
    marginHorizontal: 4,
  },
  default: {
    backgroundColor: 'violet',
  },
  selected: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'violet',
  }
 })

export default TabButton