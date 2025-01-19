import { useFavorites } from '@/context/useFavoritesContext'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useEffect, useMemo, useRef } from 'react'
import { Animated, Pressable, StyleSheet } from 'react-native'

interface Props {
    artwork?: Artwork
}
const AnimatedIonicons = Animated.createAnimatedComponent(Ionicons)


const FavoriteButton = ({ artwork }: Props) => {
  const { artworks, addFavorite, removeFavorite } = useFavorites()

  const isFavorite = useMemo(() => {
    return artworks.some((a) => artwork?.id === a.id)
  }, [artworks, artwork])

  const colorAnim = useRef(new Animated.Value(isFavorite ? 1 : 0)).current

  useEffect(() => {
    Animated.timing(colorAnim, {
      toValue: isFavorite ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start()
  }, [isFavorite])

  const iconColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['grey', 'red'],
  })

  const handlePress = () => {
    if (!artwork) return
    if (isFavorite) {
      removeFavorite(artwork.id)
    } else {
      addFavorite(artwork)
    }
  }

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Animated.View>
        <Ionicons
          style={styles.icon}
          name={isFavorite ? 'heart' : 'heart-outline'}
          color={isFavorite ? 'red' : 'grey'}
        />
      </Animated.View>
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