import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ArtsList from '@/components/art-list'
import { useFavorites } from '@/context/useFavoritesContext'
import { useArtworks } from '@/hooks/useArtworks'
import { useFilterArts } from '@/hooks/useFilterArts'
import FilterTabs from '@/components/filter-tabs'

const FavoritesScreen = () => {
  const { artworks } = useFavorites()
  const { classifications = [] } = useArtworks()

  const { 
    filteredData, 
    setSearch, 
    handleSelect, 
    selected
  } = useFilterArts(artworks, classifications);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>HomeScreen</Text>
      </View>
      <View>
        <FilterTabs classifications={classifications} handleSelect={handleSelect} selected={selected} />
      </View>
      <ArtsList artworks={filteredData} />
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