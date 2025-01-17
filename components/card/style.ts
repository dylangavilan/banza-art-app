import { Dimensions, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        margin: 5,
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 1,
        alignItems: 'center',
        width: Dimensions.get('window').width / 2 - 20, 
      },
      image: {
        width: 130,
        height: 180,
      },
      itemTitle: {
        textAlign: 'center',
        marginTop: 5,
      },
})
