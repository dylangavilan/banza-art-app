import { DARK_PURPLE } from '@/constants/colors'
import { useFavorites } from '@/context/useFavoritesContext'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useMemo } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSequence,
  Easing,
} from 'react-native-reanimated'

interface Props {
  artwork?: Artwork
}

const AnimatedIonicons = Animated.createAnimatedComponent(Ionicons)

const FavoriteButton = ({ artwork }: Props) => {
  const { artworks, addFavorite, removeFavorite } = useFavorites()
  
  const isFavorite = useMemo(() => {
    return artworks.some((a) => artwork?.id === a.id)
  }, [artworks, artwork])

  const translateY = useSharedValue(0) 
  const scale = useSharedValue(isFavorite ? 1.25 : 1)

  const animateHeart = () => {
    translateY.value = withSequence(
      withTiming(-10, { duration: 200, easing: Easing.out(Easing.ease) }),
      withTiming(0, { duration: 150, easing: Easing.in(Easing.ease) })    
    )
    const size = !isFavorite ? 1.25 : 1
    scale.value = withSequence(
      withTiming(1.5, { duration: 200, easing: Easing.out(Easing.ease) }), 
      withTiming(size, { duration: 200, easing: Easing.in(Easing.ease) })     
    )
  }
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { translateY: translateY.value },
      ],
    }
  })

  const handlePress = () => {
    if(!artwork) return
    animateHeart()
    if (isFavorite) {
      removeFavorite(artwork.id)
    } else {
      addFavorite(artwork)
    }
  }

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <AnimatedIonicons
        style={[styles.icon, animatedStyle]}
        name={isFavorite ? 'heart' : 'heart-outline'}
        color={isFavorite ? 'red' : DARK_PURPLE}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  icon: {
    fontSize: 24,
  },
})

export default FavoriteButton
