import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ArtsList from '@/components/art-list'
import { useFavorites } from '@/context/useFavoritesContext'

const FavoritesScreen = () => {
  const { artworks } = useFavorites()
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>HomeScreen</Text>
      </View>
      <ArtsList artworks={artworks} />
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

export default FavoritesScreen