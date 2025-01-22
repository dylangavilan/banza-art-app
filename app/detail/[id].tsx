import { useEffect, useState } from 'react'
import { View,  ScrollView, StyleSheet, ActivityIndicator, Text} from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import Animated, { FadeInUp } from 'react-native-reanimated';
import { useArtworkDetail } from '@/hooks/useArtworkDetail'
import { useNavigation } from '@react-navigation/native';
import FavoriteButton from '@/components/favorite-button'
import ArtorkDetail from '@/components/art-detail';

const DetailScreen = () => {
  const { id } = useLocalSearchParams()
  const { artwork, isLoading } = useArtworkDetail(id.toString())
  const navigation = useNavigation()
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true)
  const [imageError, setImageError] = useState<boolean>(false)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FavoriteButton artwork={artwork} />
      ),
    });
  }, [navigation, artwork]);

  if(!artwork || isLoading) return null;

  return (
    <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
        {isLoadingImage &&
          <ActivityIndicator style={styles.loader} size='large' color='black' />
        }
        {imageError && <Text style={styles.loader}>Image not found {':/'}</Text>}
        <Animated.Image source={{ uri: artwork?.poster }} 
                        entering={FadeInUp.delay(500).duration(500)}
                        onLoadEnd={() => setIsLoadingImage(false)}
                        resizeMethod='scale'  resizeMode='contain' alt={artwork?.title} 
                        onError={() => {setImageError(true); setIsLoadingImage(false)}}
                        style={styles.poster} />
        </View>
        <ArtorkDetail artwork={artwork} />
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loader: {
     position: 'absolute' 
  },
  imageContainer: {
    backgroundColor: 'whitesmoke',
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  poster: {
    width: '100%',
    height: '100%',
  },
})

export default DetailScreen

