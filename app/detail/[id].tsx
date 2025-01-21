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

  if(!artwork) return null;
  console.log(artwork.category_titles)
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
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
      <Animated.View style={{ paddingHorizontal: 8 }} entering={FadeInLeft.delay(300).duration(500)}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 10, color: 'black', }}>
          {artwork.title}
        </Text>
      </Animated.View>
      <Animated.View style={{ paddingHorizontal: 12 }} 
      entering={FadeInRight.delay(300).duration(500)}>
        <Text style={{  fontSize: 16, marginVertical: 5 }}>
          {artwork.short_description ?? 'Not description provided'}
        </Text>
        <Text  style={{ color: 'gray', fontSize: 14, marginVertical: 5 }}>
          {artwork.category_titles?.join(', ')}
        </Text>
        </Animated.View>
        
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'whitesmoke',
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  poster: {
    width: '100%',
    height: '100%',
  }
  
})

export default DetailScreen

