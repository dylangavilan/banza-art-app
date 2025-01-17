import { useArtworkDetail } from '@/hooks/useArtworkDetail'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Text, ScrollView } from 'react-native'

const index = () => {
  const { id } = useLocalSearchParams()
  const { artwork } = useArtworkDetail(id.toString())
  
  return (
    <ScrollView>
      <Text>
        {JSON.stringify(artwork, null, 2)}
      </Text>
    </ScrollView>
  )
}

export default index
