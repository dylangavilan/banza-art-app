import { DARK_PURPLE } from "@/constants/colors"
import { Dimensions, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        margin: 5,
        maxWidth: Dimensions.get('window').width / 2 - 20,
        paddingVertical: 12,

      },
      imageContainer: {
        backgroundColor: 'whitesmoke',
      },
      image: {
        width: '100%',
        borderRadius: 10,
        height: 200,
        
      },
      itemTitle: {
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold',
      },
})
