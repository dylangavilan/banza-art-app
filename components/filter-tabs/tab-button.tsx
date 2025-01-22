import React from 'react'
import { Pressable, Text } from 'react-native'

import { tabStyles } from './styles'

interface Props {
  children: string
  selected: boolean
  onPress: () => void
}

const TabButton = ({ children, selected, onPress }: Props) => {
  const backgroundStyle = selected? tabStyles.selected : tabStyles.normal
  return (
    <Pressable style={[tabStyles.button, backgroundStyle]} onPress={onPress}>
      <Text style={tabStyles.text}>{children}</Text>
    </Pressable>
  )
}


export default TabButton
