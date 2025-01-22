import { StyleSheet, Dimensions, View, Image, Text, Pressable } from 'react-native'
import { styles } from './style'
import { router } from 'expo-router'
import { useState } from 'react'

interface CardProps {
    poster?: string
    title: string
    id: string
}

const Card = ({ poster, title, id }: CardProps) => {
  const image = poster ? poster : 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png'

  return (
    <Pressable  style={styles.itemContainer} onPress={() => router.push(`/detail/${id}`)}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} 
                style={styles.image} resizeMode='contain' />
        </View>
        <Text style={styles.itemTitle}>{title}</Text>
    </Pressable>
  )
}



export default Card
