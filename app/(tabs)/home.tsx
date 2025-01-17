import React, { useState } from 'react'
import { View, Text, FlatList,  StyleSheet, Button } from 'react-native'
import { useArtworks } from '@/hooks/useArtworks'
import Card from '@/components/card'

const HomeScreen = () => {
  const { 
    data, 
    isLoading, 
    nextPage, 
    hasNext, 
    isFetchingNextPage } = useArtworks()
  
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <FlatList
        keyExtractor={(item => item.id.toString() + Math.random())}
        numColumns={2}
        data={data?.pages.flatMap(page => page.artworks) ?? []}
        renderItem={({ item, index }) => (
          <Card poster={item.poster} title={item.title} id={item.id.toString()} />
        )}
        onEndReached={() => { hasNext && nextPage() }}
        ListFooterComponent={isFetchingNextPage ? <Text>Loading...</Text> : null}
      />
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