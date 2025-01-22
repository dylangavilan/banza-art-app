import { LIGHT_PURPLE } from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    scrollTopButton: {
      position: 'absolute',
      backgroundColor: LIGHT_PURPLE,
      borderRadius: 50,
      padding: 4,
      top: 0,
      right: "48%"
    },
    footer: {
       height: 50, 
       justifyContent: 'center', 
       alignItems: 'center' 
    }
})
