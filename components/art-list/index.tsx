import React, { useRef } from 'react'
import { View, FlatList,  Pressable } from 'react-native'
import Animated, {  FadeInDown,  FadeOutUp } from 'react-native-reanimated';
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

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const ArtsList = ({ artworks, fetchNextPage, isFetchingNextPage, hasNext }: Props) => {
  const listRef = useRef<FlatList<any> | null>(null);
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleEndReached = () => {
    if(!hasNext || isFetchingNextPage || !fetchNextPage) return;
    return fetchNextPage()
  }

  const scrollToTop = () => {
    listRef.current?.scrollToOffset({ offset: 0, animated: true });
  }

  const handleScroll = (offset: number) => {
      setScrollPosition(offset);
  };

  return (
    <View style={styles.container}>
        <FlatList
            ref={listRef}
            keyExtractor={(item => item.id.toString() + Math.random())}
            numColumns={2}
            onScroll={event => {
              handleScroll(event.nativeEvent.contentOffset.y >= 130 ? 130 : 99);
            }}
            data={artworks}
            renderItem={({ item }) => (
                <Card poster={item.poster} title={item.title} id={item.id.toString()} />
            )}
            onEndReached={() => { fetchNextPage && handleEndReached() }}
            ListFooterComponent={ 
              <View style={styles.footer}>
                  {isFetchingNextPage &&  <Loader  />}
              </View>
              }
          />
          {scrollPosition >= 100 && 
            <AnimatedPressable 
                  entering={FadeInDown.duration(500)}
                  exiting={FadeOutUp.duration(100)}
                  style={styles.scrollTopButton} 
                  onPress={scrollToTop}>
                    <Ionicons name='arrow-up' size={20} color='white'  />
            </AnimatedPressable>
          }
    </View>
  )
}


export default ArtsList