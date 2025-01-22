import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ArtsList from '@/components/art-list'
import { useFavorites } from '@/context/useFavoritesContext'
import { useArtworks } from '@/hooks/useArtworks'
import { useFilterArts } from '@/hooks/useFilterArts'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '@/components/seachbar'

const FavoritesScreen = () => {
  const { artworks } = useFavorites()
  const { classifications = [] } = useArtworks()

  const { 
    filteredData, 
    setSearch, 
  } = useFilterArts(artworks, classifications);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Your favorites</Text>
      </View>
      <View>
        <SearchBar onChangeText={setSearch} placeholder='Find your favorite' autoComplete='off'/>
      </View>
      {
        artworks.length >  0 ?
        <ArtsList artworks={filteredData} /> :
        <View style={styles.notImagesContainer}>
          <Text style={styles.paragraph}>There aren't arts in your favorites {':('} </Text>
        </View>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  notImagesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph:{
    fontSize: 18,
    fontWeight: 'semibold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})

export default FavoritesScreen