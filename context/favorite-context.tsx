import React, { createContext, useEffect, useState, } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotifications } from '@/hooks/useNotifications';


interface ArtworkState {
  artworks: Artwork[]
}

interface ArtworkActions extends ArtworkState {
  addFavorite: (artwork: Artwork) => void
  removeFavorite: (artwork_id: number) => void
}

export const FavoritesContext = createContext<ArtworkActions | undefined>(undefined)


export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const { sendLocalNotification } = useNotifications();
  
  const addFavorite = async (artwork: Artwork) => {
    const isInFavorites = artworks.some((a) => a.id === artwork.id)
    if(isInFavorites) return;
    await AsyncStorage.setItem('favorites', JSON.stringify([...artworks, artwork]))
    setArtworks([...artworks, artwork])
  }

  const removeFavorite = async (artwork_id: number) => {
    const newArtworks = artworks.filter((a) => a.id !== artwork_id)
    await AsyncStorage.setItem('favorites', JSON.stringify(newArtworks))
    setArtworks(newArtworks)
  }
  

  const getFavorites = async () => {
    const favorites = await AsyncStorage.getItem('favorites')
    if (favorites) {
      setArtworks(JSON.parse(favorites))
    }
  }

  useEffect(() => {
    getFavorites()
  }, [])

  const contextValue: ArtworkActions = {
    artworks,
    addFavorite,
    removeFavorite
  };


  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  )
}

