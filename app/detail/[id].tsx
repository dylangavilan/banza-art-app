import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useArtworkDetail } from '@/hooks/useArtworkDetail'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import FavoriteButton from '@/components/favorite-button'
import Loader from '@/components/ui/loader';

const DetailScreen = () => {
  const { id } = useLocalSearchParams()
  const { artwork } = useArtworkDetail(id.toString())
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FavoriteButton artwork={artwork} />
      ),
    });
  }, [navigation, artwork]);

  if(!artwork) return <Loader />

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
       <Image source={{ uri: artwork.poster }} resizeMethod='scale' resizeMode='contain'
       style={{ width: '100%', height: 400 }} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    zIndex: 9999,
    backgroundColor: 'rgba(0, 0, 0, 0.23)',
    position: 'absolute',
    right: 12,
    top: 12,
  },
  imageContainer: {
    position: 'relative',
    backgroundColor: 'black',
  }
})

export default DetailScreen

