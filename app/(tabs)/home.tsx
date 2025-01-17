import { View, Text, FlatList, Button, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { useArtworks } from '@/hooks/useArtworks'

const HomeScreen = () => {
  const { data, isLoading, nextPage, hasNext, isFetchingNextPage } = useArtworks()

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
    
        numColumns={2}
        data={data?.pages.flatMap(page => page.artworks) ?? []}
        renderItem={({ item, index }) => (
          <View key={item.id + index} style={styles.itemContainer}>
            <Image source={{ uri: item.poster }} style={styles.image} resizeMode='contain' />
            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
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
  itemContainer: {
    flex: 1,
    margin: 5,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    alignItems: 'center',
    width: Dimensions.get('window').width / 2 - 20, 
  },
  image: {
    width: 130,
    height: 180,
  },
  itemTitle: {
    textAlign: 'center',
    marginTop: 5,
  },
})

export default HomeScreen