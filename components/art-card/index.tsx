import { StyleSheet, Dimensions, View, Image, Text, Pressable } from 'react-native'
import { styles } from './style'
import { router } from 'expo-router'

interface CardProps {
    poster: string
    title: string
    id: string
}

const Card = ({ poster, title, id }: CardProps) => {
  return (
    <Pressable  style={styles.itemContainer} onPress={() => router.push(`/detail/${id}`)}>
        <Image source={{ uri: poster }} 
               style={styles.image} resizeMode='contain' />
        <Text style={styles.itemTitle}>{title}</Text>
    </Pressable>
  )
}



export default Card
