import { View, Text, ScrollView, Image, StyleSheet, ActivityIndicator } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useArtworkDetail } from '@/hooks/useArtworkDetail'
import { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import FavoriteButton from '@/components/favorite-button'
import Animated, { FadeInLeft, FadeInRight, FadeInUp } from 'react-native-reanimated';

const DetailScreen = () => {
  const { id } = useLocalSearchParams()
  const { artwork, isLoading } = useArtworkDetail(id.toString())
  const navigation = useNavigation()
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true)

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
         <ActivityIndicator style={{ position: 'absolute' }} size='large' color='black' />
        }
       <Animated.Image source={{ uri: artwork?.poster }} 
                       entering={FadeInUp.delay(500).duration(500)}
                       onLoadEnd={() => setIsLoadingImage(false)}
                       resizeMethod='scale'  resizeMode='contain' alt={artwork?.title} 
                       style={styles.poster} />
      </View>
      <View style={styles.body}>
        <Animated.View entering={FadeInLeft.delay(300).duration(500)}>
          <Text style={styles.title}>
            {artwork.title} by {artwork.artist}
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInRight.delay(300).duration(500)}>
          <Text style={{  fontSize: 16, marginVertical: 5 }}>
            {artwork.short_description ?? 'Not description provided'}
          </Text>
          <Text  style={{ color: 'gray', fontSize: 14, marginVertical: 5 }}>
            {artwork.category_titles?.join(', ')}
          </Text>
          </Animated.View>
      </View>
        
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  body: {
    padding: 10,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  }
  
})

export default DetailScreen

