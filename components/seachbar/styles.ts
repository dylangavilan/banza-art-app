import { DARK_PURPLE, LIGHT_PURPLE } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const searchbarStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: DARK_PURPLE,
    },
    input: {
        paddingHorizontal: 12,
        color: LIGHT_PURPLE
    }
})