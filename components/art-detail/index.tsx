import { View, Text } from 'react-native'
import React from 'react'
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { styles } from './styles';

interface Props {
  artwork: Artwork
}

const ArtorkDetail = ({ artwork } : Props) => {
  return (
      <View style={styles.body}>
        <Animated.View entering={FadeInLeft.delay(300).duration(500)}>
          <Text style={styles.title}>
            {artwork.title} by {artwork.artist}
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInRight.delay(300).duration(500)}>
          <Text style={styles.description}>
            {artwork.short_description ?? 'Not description provided'}
          </Text>
          <Text style={styles.categories}>
            {artwork.category_titles?.join(', ')}
          </Text>
        </Animated.View>
      </View>
  )
}

export default ArtorkDetail