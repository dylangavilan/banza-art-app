import { View, FlatList, StyleSheet, Button, Pressable } from 'react-native'
import React, { useRef } from 'react'
import Card from '../art-card'
import Loader from '../ui/loader'
import Ionicons from '@expo/vector-icons/Ionicons'
import { styles } from './styles'

interface Props {
    artworks: Artwork[]
    fetchNextPage?: () => void
    isFetchingNextPage?: boolean
    hasNext?: boolean
}

const ArtsList = ({ artworks, fetchNextPage, isFetchingNextPage, hasNext }: Props) => {
  const listRef = useRef<FlatList<any> | null>(null);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleEndReached = () => {
    if(!hasNext || isFetchingNextPage || !fetchNextPage) return;
    return fetchNextPage()
  }
  
  return (
    <View style={styles.container}>
        <FlatList
            ref={listRef}
            bounces={false}
            keyExtractor={(item => item.id.toString() + Math.random())}
            numColumns={2}
            onScroll={event => {
              setScrollPosition(event.nativeEvent.contentOffset.y);
            }}
            data={artworks}
            renderItem={({ item }) => (
                <Card poster={item.poster} title={item.title} id={item.id.toString()} />
            )}
            onEndReached={() => { fetchNextPage && handleEndReached() }}
            ListFooterComponent={ 
              <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                  {isFetchingNextPage &&   <Loader  />}
              </View>}
          />
          {scrollPosition > 100 && 
            <Pressable 
                  style={styles.scrollTopButton} 
                  onPress={() => listRef.current?.scrollToOffset({ offset: 0, animated: true })}>
                    <Ionicons name='arrow-up' size={20} color='black' />
            </Pressable>
          }
    </View>
  )
}


export default ArtsList