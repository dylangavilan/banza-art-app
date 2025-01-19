import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Card from '../art-card'

interface Props {
    artworks: Artwork[]
    fetchNextPage?: () => void
    isFetchingNextPage?: boolean
    hasNext?: boolean
}

const ArtsList = ({ artworks, fetchNextPage, isFetchingNextPage, hasNext }: Props) => {
  const handleEndReached = () => {
    if(!hasNext || isFetchingNextPage || !fetchNextPage) return;
    return fetchNextPage()
  }

  return (
    <View style={styles.container}>
        <FlatList
            keyExtractor={(item => item.id.toString() + Math.random())}
            numColumns={2}
            data={artworks}
            renderItem={({ item, index }) => (
                <Card poster={item.poster} title={item.title} id={item.id.toString()} />
            )}
            onEndReached={() => { fetchNextPage && handleEndReached() }}
            ListFooterComponent={isFetchingNextPage ? <Text>Loading...</Text> : null}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default ArtsList