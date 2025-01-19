import React, { useState } from 'react'
import { View, Text, FlatList,  StyleSheet, Button } from 'react-native'
import { useArtworks } from '@/hooks/useArtworks'
import Card from '@/components/art-card'
import ArtsList from '@/components/art-list'

const HomeScreen = () => {
  const { 
    data, 
    isLoading, 
    nextPage, 
    hasNext, 
    isFetchingNextPage } = useArtworks()
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      {isLoading ?       
        <View style={styles.loadingContainer}>
          <Text>Loading</Text>
        </View> 
        :
        <ArtsList 
          artworks={data?.pages.flatMap(page => page.artworks) ?? []}
          fetchNextPage={nextPage}
          hasNext={hasNext}
          isFetchingNextPage={isFetchingNextPage}
      />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

})

export default HomeScreen