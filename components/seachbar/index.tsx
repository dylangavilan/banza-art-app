
import { TextInput, TextInputProps, View } from 'react-native'
import React from 'react'
import { searchbarStyles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { DARK_PURPLE } from '@/constants/colors'

const SearchBar = ({ ...props }: TextInputProps) => {
  return (
    <View style={searchbarStyles.container}>
      <Ionicons name="search" size={24} color={DARK_PURPLE} />
      <TextInput {...props} style={searchbarStyles.input} />
    </View>
  )
}

export default SearchBar