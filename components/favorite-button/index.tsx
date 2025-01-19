import { useFavorites } from '@/context/useFavoritesContext'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useMemo } from 'react'
import { Pressable } from 'react-native'

interface Props {
    artwork?: Artwork
}

const FavoriteButton = ({ artwork } : Props) => {
  const { artworks, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = useMemo(() => {
    return artworks.some((a) => artwork?.id === a.id) 
   }, [artworks, artwork])
 
  const handlePress = () => { 
    if(!artwork) return
    if(isFavorite) {
        removeFavorite(artwork.id)
    } else {
      addFavorite(artwork)
    }
  }

  return (
    <Pressable onPress={handlePress} style={{ marginRight: 15 }}>
        <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={24} color={isFavorite ? 'red' : 'black'} />
    </Pressable>
  )
}

export default FavoriteButton
