import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { artworkService } from '@/services/artwork'
import { useArtworks } from '@/hooks/useArtworks'

const HomeScreen = () => {
  const { data, isLoading } = useArtworks()
  console.log(data)
  if(isLoading) {
    return <View>
        Loading
    </View>
  }

  return (
    <View>
      <Text>HomeScreen</Text>
      {/* <FlatList 
        data={artworkQuery.data!.data}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      /> */}
    </View>
  )
}

export default HomeScreen