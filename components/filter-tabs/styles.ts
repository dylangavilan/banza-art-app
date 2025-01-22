import { LIGHT_PURPLE, DARK_PURPLE } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const tabStyles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginHorizontal: 2,
      paddingHorizontal: 16,
      paddingVertical: 4,
    },
    text: {
      color: 'white',
      fontWeight: 'semibold',
    },
    selected: {
        backgroundColor: DARK_PURPLE,
    },
    normal: {
        backgroundColor: LIGHT_PURPLE,
    }
  })