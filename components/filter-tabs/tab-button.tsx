import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withSequence,
} from 'react-native-reanimated'

interface Props {
  children: string
  selected: boolean
  onPress: () => void
}

const PressableAnimated = Animated.createAnimatedComponent(Animated.View)

const TabButton = ({ children, selected, onPress }: Props) => {
  // const backgroundColor = useSharedValue(selected ? 1 : 0)
  // const fontSize = useSharedValue(selected ? 24 : 20)
  // const opacity = useSharedValue(selected ? 1 : 0.5)
  // const animatedStyle = useAnimatedStyle(() => {
  //   return {
  //     fontSize: withTiming(fontSize.value, { duration: 300, easing: Easing.out(Easing.ease) }),
  //     borderBottomWidth: withTiming(backgroundColor.value, { duration: 300, easing: Easing.out(Easing.ease) }),
  //     borderBottomColor: withTiming(backgroundColor.value ? 'black' : 'transparent', { duration: 300, easing: Easing.out(Easing.ease) }),
  //     opacity: withTiming(opacity.value, { duration: 300, easing: Easing.out(Easing.ease) }),
  //   }
  // })

  const handlePress = () => {

    onPress()
  }

  return (
    <PressableAnimated style={[styles.button]} onTouchEnd={handlePress}>
      <Text style={styles.text}>{children}</Text>
    </PressableAnimated>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 5,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
})

export default TabButton
