import { StyleSheet, Dimensions, View, Image, Text, Pressable } from 'react-native'
import { styles } from './style'
import { router } from 'expo-router'
import { useState } from 'react'
import { NOT_FOUND_IMAGE } from '@/constants'

interface CardProps {
    poster?: string
    title: string
    id: string
}

const Card = ({ poster, title, id }: CardProps) => {
  const image = poster ? poster : NOT_FOUND_IMAGE

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
