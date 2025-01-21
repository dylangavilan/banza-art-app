import React, {  useMemo, useState } from 'react'
import { View, Text, FlatList,  StyleSheet, Button, TextInput, Pressable } from 'react-native'
import { useArtworks } from '@/hooks/useArtworks'
import ArtsList from '@/components/art-list'
import Loader from '@/components/ui/loader'
import FilterTabs from '@/components/filter-tabs'
import { useFilterArts } from '@/hooks/useFilterArts'

const HomeScreen = () => {
  const { 
    data = [], 
    classifications = [],
    isLoading, 
    nextPage, 
    hasNext, 
    isFetchingNextPage } = useArtworks()
    
  const { 
    filteredData, 
    setSearch, 
    handleSelect, 
    selected
   } = useFilterArts(data, classifications)

  return (
    <View style={styles.container}>
      <View>
       <FilterTabs classifications={classifications ?? []} handleSelect={handleSelect} selected={selected}/>
      </View>
      <TextInput placeholder='Search a art' onChangeText={setSearch}/>
      {isLoading ?       
        <Loader />
        :
        <ArtsList 
          artworks={filteredData ?? []}
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
    backgroundColor: '#fff',
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