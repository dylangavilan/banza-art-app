import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { useArtworks } from '@/hooks/useArtworks'
import ArtsList from '@/components/art-list'
import Loader from '@/components/ui/loader'
import FilterTabs from '@/components/filter-tabs'
import { useFilterArts } from '@/hooks/useFilterArts'
import SearchBar from '@/components/seachbar'

const HomeScreen = () => {
  const { 
    data: artworks = [], 
    classifications = [],
    isLoading, 
    nextPage, 
    hasNext, 
    isFetchingNextPage } = useArtworks()
    
  const { 
    filteredData: filteredArtworks, 
    setSearch, 
    handleSelect, 
    selected
   } = useFilterArts(artworks, classifications)
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Find your Art</Text>
       <FilterTabs classifications={classifications ?? []} handleSelect={handleSelect} selected={selected}/>
       <SearchBar onChangeText={setSearch} placeholder='Find your art'/>
      </View>
      {isLoading ?       
        <Loader />
        :
        <ArtsList 
          artworks={filteredArtworks ?? []}
          fetchNextPage={nextPage}
          hasNext={selected ? false : hasNext}
          isFetchingNextPage={isFetchingNextPage}
      />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
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
    textAlign: 'center',
  },

})

export default HomeScreen